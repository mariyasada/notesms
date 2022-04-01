import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { NoteProvider } from "./Context/note-context";
import { ArchiveNotesProvider } from "./Context/archive-note-context";
import { ThemeProvider } from "./Context/theme-context";

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
