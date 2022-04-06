import { useEffect } from "react";
import axios from "axios";

export const ArchiveNotesReducer =(state,action)=>{
    console.log(state,action,"from reducer");
    switch (action.type) {

        case "LOAD_ARCHIVE_DATA":
             return {...state, ArChiveList:[...state.ArChiveList,...action.payload]}
        
        case "ADD_TO_ARCHIVE": 
                    (async () => {
                  const {data}  = await axios.post(
                    "https://my-json-server.typicode.com/mariyasada/jsonAPI/archive", action.payload
                    );
                    console.log(data);
                    
                })();                
           return {...state, ArChiveList:[...state.ArChiveList,{...action.payload}]}

          case "ARCHIVE_OUT_AND_ADD_NOTES":
                 (async () => {
                    await axios.delete(
                    `https://my-json-server.typicode.com/mariyasada/jsonAPI/archive/${action.payload.id}`
                    );
                    
                })();                
              return {...state,ArChiveList:state.ArChiveList.filter((item)=>item.id!== action.payload.id)}
    
        default:
            return state
    }
}