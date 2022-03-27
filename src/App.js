import "./App.css";
import {ArchivePage, DeletedNotePage, HomePage, NotePage} from "./pages/indexpage"
import {Routes,Route} from "react-router";



function App() {
  return (
    <div className="App"> 
    <Routes>
              <Route path="/" element={<HomePage/>} />              
              <Route path="/notepage" element={<NotePage/>}/>
              <Route path="/archivepage" element={<ArchivePage/>}/>
              <Route path="/deletednotepage" element={<DeletedNotePage/>}/>
     </Routes>       
    </div>
  );
}

export default App;
