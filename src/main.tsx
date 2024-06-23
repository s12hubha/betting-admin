import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/strore.ts";
import "react-toastify/dist/ReactToastify.css";
/* eslint no-use-before-define: 0 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
