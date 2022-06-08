import axios from "axios";

export const TrashNotesReducer=(state,action)=>{
    switch (action.type) {

    case "LOAD_TRASH_DATA":
      return {...state, TrashList:[...state.TrashList,...action.payload]}
      
        case "ADD_TO_TRASH": 
        (async () => {
                    await axios.post(
                    "https://my-json-server.typicode.com/mariyasada/jsonAPI/trash", action.payload
                    );
                    
                })();          
             return {...state, TrashList:[...state.TrashList,{...action.payload}]}

      case "REMOVE_FROM_TRASH": 
      (async () => {
        await axios.delete(
          `https://my-json-server.typicode.com/mariyasada/jsonAPI/notes/${action.payload.id}`
        );
        
      })();       
             return {...state,TrashList:state.TrashList.filter((item)=>item.id !== action.payload.id)}
                 
    
        default:
           return state;
    }
}