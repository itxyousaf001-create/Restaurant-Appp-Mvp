import React,{createContext,useContext,useState} from 'react';
import {lightTheme,darkTheme} from './theme';
const ThemeContext=createContext(null);
export function ThemeProvider({children}){const [isDark,setIsDark]=useState(false); const toggleTheme=()=>setIsDark(v=>!v); const theme=isDark?darkTheme:lightTheme; return <ThemeContext.Provider value={{isDark,toggleTheme,theme}}>{children}</ThemeContext.Provider>}
export function useTheme(){const c=useContext(ThemeContext); if(!c) throw new Error('useTheme must be used inside ThemeProvider'); return c;}
