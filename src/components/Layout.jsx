import { useReducer } from "react";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext";

const initialState = { theme: 'light' };
function themeReducer(state,action){
    switch(action.type){
        case 'toggle_theme':
            return { theme: state.theme === 'light' ? 'dark' : 'light'}
        default:
            return state;
    }
}


export default function Layout({ children }) {
    const [state,dispatch] = useReducer(themeReducer,initialState);

    const layoutStyle={
        background : state.theme === 'light' ? '#fff' : '#333',
        color : state.theme === 'light' ? '#000' : '#fff',
    }

    return (
        <ThemeContext.Provider value={{state,dispatch}}>
            <div style={layoutStyle}>
                <Header />
                { children }
            </div>
        </ThemeContext.Provider>
    );
}