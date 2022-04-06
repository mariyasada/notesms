import axios from "axios";
import { createContext,useContext ,useState,useEffect,useReducer  } from "react";
import { FilterReducer } from "./Reducer/FilterReducer";
import { functionList,composeFunction } from "./Reducer/utils/utils";

 const NoteContext = createContext();

 const initialState={
     sortByDate:null,
     sortByPriority:[],
     sortByTag:[],
     searchByQuery:""
 }

 const NoteProvider =({children})=>{
     const [allNotes,setallNotes]=useState([]);
     const [pinnedNotes,setPinnedNotes]=useState([]);
      const [isEditing, setEditing] = useState(false);
      const [EditItemId,setEditItemId]=useState(null);  

   const [state,dispatch]=useReducer (FilterReducer,initialState);  
   const filterData = composeFunction(state,functionList)([...allNotes])
   
     useEffect(()=>{
         (async()=>{

            try{
                const {data} = await axios.get("https://my-json-server.typicode.com/mariyasada/jsonAPI/notes");
                 setallNotes(data);
            }
            catch(err)
            {
                console.log("can't get data",err)
                       }           
                
         })();
     },[])

     return <NoteContext.Provider value={{allNotes,setallNotes,pinnedNotes,setPinnedNotes,isEditing, setEditing,EditItemId,setEditItemId,state,dispatch,filterData}}>{children}</NoteContext.Provider>
 }
 const useNotes =()=>useContext(NoteContext);

 export {useNotes,NoteProvider};