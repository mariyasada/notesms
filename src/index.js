import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { NoteProvider,ArchiveNotesProvider,ThemeProvider } from "./Context/combineContext";
import { AuthProvider } from "./Context/auth-context";
// Call make Server
// makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <NoteProvider>
          <ArchiveNotesProvider>
          <App />
          </ArchiveNotesProvider>
        </NoteProvider>
     </AuthProvider>
     </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
