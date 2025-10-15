import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header(){
    const { state, dispatch } = useContext(ThemeContext);

    return(
        <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <h5>{ state.theme } Mode</h5>
            <button onClick={ () => dispatch({ type: 'toggle_theme' }) }>Ubah Tema</button>
        </header>
    );
}