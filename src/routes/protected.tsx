
import AppLayoutContainer from "../components/layouts/applayoutContainer"
import AuthService from "../core/service/auth.service"
import { Navigate } from "react-router-dom"
import { lazy } from "react"
const Dashboard= lazy(()=>import("../pages/private/Dasboard"))
const UserManagement= lazy(()=>import("../pages/private/UserManagement/routes"))
const Games= lazy(()=>import("../pages/private/Games/routes"))

const auth= AuthService.isLoggedIn()

export const ProtectedRoutes=[
    {
        path:"/app",
        element:<AppLayoutContainer auth={auth}/>,
        children:[
            {path:"dashboard",element:<Dashboard/>},
            {path:"user-management/*",element:<UserManagement/>},
            {path:"games/*",element:<Games/>},
           
        ]
    },
    {
        path:"/",
        element:<Navigate to={"/app/dashboard"}/>,
       
    },
   
    
]