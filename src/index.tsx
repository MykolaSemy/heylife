import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENTID =
  "198123204164-li0kb8cagimui58ed049l10l850cgu0b.apps.googleusercontent.com";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <GoogleOAuthProvider clientId={CLIENTID}>
    <App />
  </GoogleOAuthProvider>
);
