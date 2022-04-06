import { createContext,useContext, useReducer,useEffect ,useState} from "react";
import { ArchiveNotesReducer } from "./Reducer/archiveNotesReducer";
import { TrashNotesReducer } from "./Reducer/TrashNotesReducer";
import axios from "axios";



const ArchiveContext = createContext ();

const initialState={
    ArChiveList:[],
    TrashList:[]
}

const ArchiveNotesProvider = ({children})=>{
    const[archivedata,setarchiveData]=useState([]);
    const [archiveState,archiveDispatch]=useReducer(ArchiveNotesReducer,initialState);
    const [trashListState,trashListDispatch]=useReducer(TrashNotesReducer,initialState);

     useEffect(()=>{
         (async()=>{

            try{
                const {data} = await axios.get("https://my-json-server.typicode.com/mariyasada/jsonAPI/archive");
                console.log(data,"archivedata");
                archiveDispatch({type:"LOAD_ARCHIVE_DATA", payload:data})
            }
            catch(err)
            {
                console.log("can't get data",err)
           } 
           
           try{
                const {data} = await axios.get("https://my-json-server.typicode.com/mariyasada/jsonAPI/trash");
                console.log(data,"trashadta");
                trashListDispatch({type:"LOAD_TRASH_DATA", payload:data})
           }
           catch(err)
            {
                console.log("can't get data",err)
           } 
                
         })();
     },[])
    return <ArchiveContext.Provider value={{archiveState,archiveDispatch,trashListState,trashListDispatch}}>{children}</ArchiveContext.Provider>
}

const useArchiveNote =()=>useContext(ArchiveContext);

export {ArchiveNotesProvider,useArchiveNote};