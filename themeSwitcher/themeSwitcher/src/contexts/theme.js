import React from 'react';

export const ThemeContext = React.createContext({themeMode: 'light', darkTheme:()=>{}, lightTheme: ()=>{}});
//I am using createContext for creating context for thememodes values also passing functions with it to control theme color

export const ThemeProvider = ThemeContext.Provider;
//I need to provide themeContext variables or functions to all the child components so I need to wrap privider around it so I can access themecontext values inside any child component

export default function useTheme(){
    return React.useContext(ThemeContext)
}