import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductStoreProvider from "./context/ProductStoreProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ProductStoreProvider>
      <App />
    </ProductStoreProvider>
  </BrowserRouter>
);
