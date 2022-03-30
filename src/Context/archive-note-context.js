import { createContext,useContext, useReducer } from "react";
import { ArchiveNotesReducer } from "./Reducer/archiveNotesReducer";
import { TrashNotesReducer } from "./Reducer/TrashNotesReducer";


const ArchiveContext = createContext ();

const initialState={
    ArChiveList:[],
    TrashList:[]
}

const ArchiveNotesProvider = ({children})=>{
    const [archiveState,archiveDispatch]=useReducer(ArchiveNotesReducer,initialState);
    const [trashListState,trashListDispatch]=useReducer(TrashNotesReducer,initialState);
    return <ArchiveContext.Provider value={{archiveState,archiveDispatch,trashListState,trashListDispatch}}>{children}</ArchiveContext.Provider>
}

const useArchiveNote =()=>useContext(ArchiveContext);

export {ArchiveNotesProvider,useArchiveNote};