import axios from "axios";
import { ILoginDetails } from "../../models/interfaces/auth";
import { APIConstants } from "../../shared/constants";
import { UrlUtils } from "../../utilis/http-utils";
import { setIsLoading, setUser } from "../../shared/slices/auth";
import { Dispatch } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import AuthService from "../../core/service/auth.service";
import { Socket} from "socket.io-client";
import SocketConnector from "../../socket-connection";

// const URL = UrlUtils.getBaseUrl();
interface ClientToServerEvents {
  hello: () => void;
}
export let socket: Socket<ClientToServerEvents> | undefined;
export const SignInAction =
  (payload: ILoginDetails, navigate: any) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        UrlUtils.getBaseUrl() + APIConstants?.login,
        payload,
        {headers:{    "ngrok-skip-browser-warning" : "6022"}}
      );

      if (res?.data?.success) {
        toast.success("Welcome!!");

        dispatch(setUser({ ...res?.data?.data, isAuthenticated: true }));
        AuthService?.setLogin({
          access_token: res?.data?.accessToken,
          role: res?.data?.data?.role,
        });
       
        //  socket= io(URL,{
        //     extraHeaders:{
        //     Authorization: `Bearer ${res?.data?.accessToken}`,
        // }})
        navigate("/");

        dispatch(setIsLoading(false));

        return res?.data?.data;
      } else {
        toast.error(res?.data?.message);
      }
      dispatch(setIsLoading(false));
      console.log(res);
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log(error);
    }
  };
