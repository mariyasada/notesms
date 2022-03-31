const composeFunction=(state,functionList)=>(allNotes)=>{
    console.log(allNotes,state);
    return functionList.reduce((acc,currentFunction)=>{
        return currentFunction(state,acc);
    },allNotes);
}

const notesSortByDate=(state,allNotes)=>{   
    if(state.sortByDate==="Sort_by_date")
    {
        return allNotes.sort((a,b)=>new Date(a.date) - new Date(b.date));
    }
    else return allNotes;

}

const notesSortByPriority=(state,allNotes)=>{    
    const priorityList = state. sortByPriority
    return priorityList.length==0 ? allNotes: allNotes.filter((note)=>priorityList.some((noteitem)=>noteitem===note.priority))
}

const notesSortByTag =(state,allNotes)=>{
    const tagList = state.sortByTag;
    return tagList.length==0 ? allNotes: allNotes.filter((note)=>tagList.some((noteitem)=>noteitem===note.tag))
}

const filterBySearch=(state,allNotes)=>{
    if(state.searchByQuery)
    {
        return allNotes.filter((note)=>(note.title.toLowerCase()|| note.content.toLowerCase()).includes(state.searchByQuery))
    }
    else return allNotes;
}
const functionList=[notesSortByDate,notesSortByPriority,notesSortByTag,filterBySearch];

export {functionList,composeFunction}