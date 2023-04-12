import { createRoot } from "react-dom/client";
import App from "./App";
import Context from "./Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Context>
    <App />
  </Context>
);
