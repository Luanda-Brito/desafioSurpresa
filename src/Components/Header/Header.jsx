import {Link} from "react-router-dom"
import { HeaderStyle } from "./style"

export default function Header(){
    return(
        <HeaderStyle>
            <img src="src\assets\images\logo.png" alt="logomarca" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/novidades">Novidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}