import axios from "axios";
import { createContext,useContext ,useState,useEffect  } from "react";



 const NoteContext = createContext();
 const NoteProvider =({children})=>{
     const [allNotes,setallNotes]=useState([]);
   
     useEffect(()=>{
         (async()=>{

                const {data} = await axios.get("https://my-json-server.typicode.com/mariyasada/jsonAPI/notes");
                 setallNotes(data);
                console.log(data,"mariyasdata");
         })();
     },[])

     return <NoteContext.Provider value={{allNotes,setallNotes}}>{children}</NoteContext.Provider>
 }
 const useNotes =()=>useContext(NoteContext);

 export {useNotes,NoteProvider};