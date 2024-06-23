
import { Route, Routes } from 'react-router-dom'
import UserManagement from './UserManagement'



const UserManagementRoutes = () => {
  return (
   <Routes>
    <Route path='' element={<UserManagement/>}/>
    <Route path='create' element={<UserManagement/>}/>
    <Route path='edit/:id?' element={<UserManagement/>}/>
   
   </Routes>
  )
}

export default UserManagementRoutes