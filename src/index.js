import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./screens/App";

const GlobalStyle = createGlobalStyle`
  body {
    background: #313131;
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
