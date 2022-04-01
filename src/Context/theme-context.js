import { createContext,useContext, useState } from "react";



const defaultState ={theme:"light"}
const ThemeContext =createContext();

const ThemeProvider =({children})=>{
    const [theme,setTheme]=useState({theme:"light"});
    return <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
}

const useTheme =()=>useContext(ThemeContext);

export{useTheme,ThemeProvider};