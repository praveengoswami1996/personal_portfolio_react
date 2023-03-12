import { createContext, useReducer } from "react";

const themeContext = createContext();

//This initialState will be used with useReducer
const intialState = { darkMode : false };

//This themeReducer will be used with useReducer
const themeReducer = (state, action) => {
    switch(action.type){
        case 'toggle':
            return { darkMode : !state.darkMode} 
        default:
            return state;   
    }
}

function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, intialState);

    return (
        <themeContext.Provider value={{state, dispatch}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider;
export { themeContext };