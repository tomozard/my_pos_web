import React from "react";
// import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import * as ReactDOM from "react-dom/client";
import { LiffProvider } from "react-liff";
const root = ReactDOM.createRoot(document.getElementById("root")!);

const liffId = "1657277483-8myGPOr0";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LiffProvider liffId={liffId}>
        <App />
      </LiffProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
