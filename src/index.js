import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { NoteProvider,ArchiveNotesProvider,ThemeProvider } from "./Context/combineContext";
// Call make Server
// makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <NoteProvider>
      <ArchiveNotesProvider>
      <App />
      </ArchiveNotesProvider>
     </NoteProvider>
     </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
