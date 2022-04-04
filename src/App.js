import "./App.css";
import {ArchivePage, DeletedNotePage, HomePage, NotePage, PageNotFound} from "./pages/indexpage"
import {Routes,Route} from "react-router";
import { Navbar } from "./Component";



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
    </div>
  );
}

export default App;
