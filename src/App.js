import "./App.css";
import {ArchivePage, DeletedNotePage, HomePage, NotePage, PageNotFound} from "./pages/indexpage"
import {Routes,Route} from "react-router";
import { Navbar } from "./Component";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <Routes>
              <Route path="/" element={<HomePage/>} />              
              <Route path="/notepage" element={<NotePage/>}/>
              <Route path="/archivepage" element={<ArchivePage/>}/>
              <Route path="/deletednotepage" element={<DeletedNotePage/>}/>
              <Route path="*" element={<PageNotFound/>}/>
     </Routes>  
     <Toaster
        position="top-right"
        toastOptions={{ className: "toast-display", duration: 2000 }}
      />   
    </div>
  );
}

export default App;
