import { Suspense } from "react"
import { HttpInterceptor } from "../../core/httpInterceptor"
import Applayout from "./applayout"
import { Spinner } from "flowbite-react"
import {Outlet } from "react-router-dom"
import FullPageSpinner from "../common/spinner/FullPageSpinner"
import { useAppSelector } from "../../redux/store/strore"
export interface IAppProps {
    auth:boolean
  }
const AppLayoutContainer=({auth}:IAppProps)=>{
    console.log("from-container=>>>",{auth})
    const { isLoading } = useAppSelector((store) => store?.auth);
    return (
        <Applayout>
           {isLoading && <FullPageSpinner />}
            <HttpInterceptor>
        <Suspense
        fallback={
            <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
        >
        {<Outlet/>}
        </Suspense>
        </HttpInterceptor>
        </Applayout>
    )
}
export default AppLayoutContainer