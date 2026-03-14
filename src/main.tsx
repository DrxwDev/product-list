import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ShoppingProvider from "./provider/ShoppingProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ShoppingProvider>
    <App />
  </ShoppingProvider>,
);
