import axios from "axios";

export const TrashNotesReducer=(state,action)=>{
    console.log(state,action)
    switch (action.type) {
        case "ADD_TO_TRASH":
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