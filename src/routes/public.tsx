
import { Navigate } from "react-router-dom";
import { AuthRoutes } from "../pages/auth/routes";
import AuthService from "../core/service/auth.service";
const auth= AuthService.isLoggedIn()
console.log("from-login=>>>",{auth})
export const publicRoutes=[
    {
    path:"/auth/*",
    element:<AuthRoutes/>
},
{
    path:"/",
    element:<Navigate to={auth?"/app/dashboard":"/auth/login"}/>,
   
},   

] 
