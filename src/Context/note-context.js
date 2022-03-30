import axios from "axios";
import { createContext,useContext ,useState,useEffect  } from "react";



 const NoteContext = createContext();
 const NoteProvider =({children})=>{
     const [allNotes,setallNotes]=useState([]);
     const [pinnedNotes,setPinnedNotes]=useState([]);
      const [isEditing, setEditing] = useState(false);
      const [EditItemId,setEditItemId]=useState(null);
      
   
     useEffect(()=>{
         (async()=>{

                const {data} = await axios.get("https://my-json-server.typicode.com/mariyasada/jsonAPI/notes");
                 setallNotes(data);
                
         })();
     },[])

     return <NoteContext.Provider value={{allNotes,setallNotes,pinnedNotes,setPinnedNotes,isEditing, setEditing,EditItemId,setEditItemId}}>{children}</NoteContext.Provider>
 }
 const useNotes =()=>useContext(NoteContext);

 export {useNotes,NoteProvider};