import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import { useEffect } from "react";
import AuthService from "./service/auth.service";
import { useNavigate } from "react-router-dom";
import { UrlUtils } from "../utilis/http-utils";

const api= axios.create({
    baseURL:UrlUtils.getBaseUrl()
})
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
  }
export const HttpInterceptor=({children}:{children:React.ReactNode})=>{
    const navigate = useNavigate()
 useEffect(()=>{
    const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        
        const token = AuthService.getSession()?.access_token; // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["ngrok-skip-browser-warning"] = "6022";
    
    }
        return config;
    }
    
    const onRequestError = async(error: AxiosError): Promise<AxiosError> => {
        console.error(`[request error] [${JSON.stringify(error)}]`);
      
        return Promise.reject(error);
    }
    
    const onResponse = (response: AxiosResponse): AxiosResponse => {
      
        return response;
    }
    
    const onResponseError = async(error: AxiosError<unknown>): Promise<AxiosError> => {
        console.error(`[response error] [${JSON.stringify(error)}]`);
        const originalRequest = error.config as CustomAxiosRequestConfig
        if (
            error?.response?.status === 401 &&
            originalRequest?.url === 'http://127.0.0.1:3000/v1/auth/token'
          ) {
            AuthService.setLogout(navigate)
            return Promise.reject(error)
          }
      
          if (error?.response?.status === 401 && !originalRequest?._retry) {
            const refreshToken = AuthService.getSession()?.refresh_token;
            if (!refreshToken) {
              // Handle the case where refreshToken is not available
              AuthService.setLogout(navigate);
              return Promise.reject(error);
            }
            const newRequestConfig: CustomAxiosRequestConfig = {
              ...originalRequest,
              _retry: true
            };
            try {
              const response = await axios.post('/auth/token', {
                refresh_token: refreshToken
              });
              if (response.status === 201) {
                AuthService.setLogin(response.data);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + AuthService.getSession()?.access_token;
                return axios(newRequestConfig);
              }
            } catch (refreshError) {
              // Handle errors during token refresh
              console.error('Error refreshing token:', refreshError);
              navigate('/auth/login');
              return Promise.reject(error);
            }
          }
        return Promise.reject(error);
    }
    
    function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
        axiosInstance.interceptors.request.use(onRequest, onRequestError);
        axiosInstance.interceptors.response.use(onResponse, onResponseError);
        return axiosInstance;
    }
    setupInterceptorsTo(api)
 },[])

 return children

}
export default api