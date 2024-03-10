import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App is a .tsx file
import "./assets/scss/global.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found in the DOM.");
}
