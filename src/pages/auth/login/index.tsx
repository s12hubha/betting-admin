import { FC } from 'react'
import useLoginhook from './useLoginhook'
import LoginUI from './loginUi'



const LoginPage:FC = () => {
     const {loginDetails,handleChange,handleSubmit}= useLoginhook()
  return (
    <div>
        <LoginUI
         loginDetails={loginDetails}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
        />
    </div>
  )
}

export default LoginPage