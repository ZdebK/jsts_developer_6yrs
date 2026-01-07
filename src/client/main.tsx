
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/utilities.scss";
import "./styles/globals.css";
import "./i18n.ts";

createRoot(document.getElementById("root")!).render(<App />);  