import {Link} from "react-router-dom"
import { HeaderStyle } from "./style"

export default function Header(){
    return(
        <HeaderStyle>
            <img src="https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/496e16d63d9b8430605e63b086aee1aac18d22b3/src/assets/images/logo.png" alt="logomarca" />
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