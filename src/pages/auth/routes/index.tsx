import { Route, Routes, } from 'react-router-dom';
import LoginPage from '../login';



export const AuthRoutes = () => {
 
 
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      {/* <Route index element={<Navigate to={"login"}/>} /> */}
    </Routes>
  );
};
