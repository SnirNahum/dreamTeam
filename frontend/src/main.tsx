import ReactDOM from "react-dom";
import App from "./App"; // Assuming App is a .tsx file
import "./assets/scss/global.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
