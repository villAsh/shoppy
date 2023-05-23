import { useState } from "react";
import { useEffect } from "react"

export default function useDarkSide(){
    const [theme ,setTheme] = useState(localStorage.theme);
    const ColorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(ColorTheme);
        root.classList.add(theme);

        localStorage.setItem('theme',theme);        
    },[theme,ColorTheme]);
    return [ColorTheme,setTheme];
}