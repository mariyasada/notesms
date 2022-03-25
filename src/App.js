import "./App.css";
import {HomePage, NotePage} from "./pages/indexpage"
import {Routes,Route} from "react-router";


function App() {
  return (
    <div className="App"> 
    <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/notepage" element={<NotePage/>}/>
     </Routes>       
    </div>
  );
}

export default App;
