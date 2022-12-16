import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import { ContextProvider} from "./contexts/ContextProvider.jsx";
import './index.css'


const container = document.getElementById("root");
 render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
 </React.StrictMode>,
  container
);