
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./client/styles/utilities.scss";
import "./client/styles/globals.scss";
import "./client/i18n.ts";

createRoot(document.getElementById("root")!).render(<App />);  