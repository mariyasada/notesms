import "./App.css";
import {ArchivePage, DeletedNotePage, HomePage, LogInPage, NotePage, PageNotFound, SignUpPage} from "./pages/indexpage"
import {Routes,Route} from "react-router";
import { Navbar } from "./Component";
import { Toaster } from "react-hot-toast";
import { RequiresAuth } from "./Router/RequiresAuth";
import {app} from "./firebaseconfig";



function App() {
  
  return (
    <div className="App"> 
    <Navbar/>
    <Routes>
              <Route path="/" element={<HomePage/>} />              
              <Route path="/notepage" element={<RequiresAuth children={<NotePage/>}></RequiresAuth>}/>
              <Route path="/archivepage" element={<RequiresAuth children={<ArchivePage/>}></RequiresAuth>}/>
              <Route path="/deletednotepage" element={<RequiresAuth children={<DeletedNotePage/>}></RequiresAuth>}/>
              <Route path="/login" element={<LogInPage/>}/>
              <Route path="/signup" element={<SignUpPage/>}/>
              <Route path="*" element={<PageNotFound/>}/>
     </Routes>  
     <Toaster
        position="top-right"
        toastOptions={{ className: "toast-display", duration: 3000 }}
      />   
    </div>
  );
}

export default App;
