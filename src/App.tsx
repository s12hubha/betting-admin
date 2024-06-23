import "./index.css";
import RoutePage from "./routes";
import FullPageSpinner from "./components/common/spinner/FullPageSpinner";
import { useAppSelector } from "./redux/store/strore";
import AuthService from "./core/service/auth.service";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { socket } from "./socket";

function App() {
  const { isLoading } = useAppSelector((store) => store?.auth);
  const auth = AuthService.isLoggedIn();
  useEffect(() => {
    socket.on("connect", () => toast.success("Connected to Game"));
  }, []);
  console.log({isLoading})
  return (
    <>
      <ToastContainer />
      {isLoading && <FullPageSpinner />}
      <BrowserRouter>
        <RoutePage auth={auth} />
      </BrowserRouter>
    </>
  );
}

export default App;
