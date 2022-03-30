export const ArchiveNotesReducer =(state,action)=>{
    console.log(state,action,"from reducer");
    switch (action.type) {
        case "ADD_TO_ARCHIVE":            
           return {...state, ArChiveList:[...state.ArChiveList,{...action.payload}]}

          case "ARCHIVE_OUT_AND_ADD_NOTES":
              return {...state,ArChiveList:state.ArChiveList.filter((item)=>item.id!== action.payload.id)}
    
        default:
            return state
    }
}