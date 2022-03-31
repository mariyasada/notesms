
export const FilterReducer=(state,action)=>{
  console.log(action.payload)
    switch (action.type) {
        case "SORT_BY_DATE":  
          return{...state,sortByDate:"Sort_by_date"}

        case "SORT_BY_PRIORITY":  
          return {...state,sortByPriority:"Sort_By_Priority"}

          case "SET_TAG":
            return {...state,sortByTag:[...state.sortByTag,action.payload]}

          case "UNSET_TAG":
            return {...state,sortByTag: state.sortByTag.filter((tagname) => tagname !== action.payload)}    
    
         case "SET_PRIORITY":
           return {...state, sortByPriority:[...state.sortByPriority,action.payload]}
      
           case "UNSET_PRIORITY":
             return {...state,sortByPriority:state.sortByPriority.filter((priorityname)=>priorityname !== action.payload)}

         case "CLEAR_ALL_FILTERS":
           return {sortByDate:null, sortByPriority:[],sortByTag:[],searchByQuery:"" }

           case "SEARCH_BY_QUERY":
            return {...state, searchByQuery:action.payload}
           
            default:
           return state
    }
}