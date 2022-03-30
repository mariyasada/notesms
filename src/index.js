import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { NoteProvider } from "./Context/note-context";
import { ArchiveNotesProvider } from "./Context/archive-note-context";

// Call make Server
// makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NoteProvider>
      <ArchiveNotesProvider>
      <App />
      </ArchiveNotesProvider>
     </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
