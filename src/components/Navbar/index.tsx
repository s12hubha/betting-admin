import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { CommonUtils } from '../../utilis/common-utills'
import AuthService from '../../core/service/auth.service'
import { useNavigate } from 'react-router-dom'
import useSidebarhook from '../sidebar/useSidebarhook'

type Props = {
    userName:string|undefined,
    email:string|undefined,
    
}

const NavBar = ({userName,email}: Props) => {
    const navigate= useNavigate()
    const {toggleSidebar}= useSidebarhook()
const logout=()=>{
    AuthService.setLogout(navigate)
}
  return (
    <Navbar fluid rounded className='border'>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Betting App</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={
        
          <Avatar placeholderInitials={CommonUtils.getUserInitals(userName)} rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">{userName}</span>
          <span className="block truncate text-sm font-medium">{email}</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Profile</Dropdown.Item>
       
        <Dropdown.Divider />
        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle onClick={()=>toggleSidebar()} />
    </div>
  
  </Navbar>
  )
}

export default NavBar