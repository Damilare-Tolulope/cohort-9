import { Link } from 'react-router-dom';

import logo from "../assets/images/logo.avif";

function Header() {
    return (
        <header>
            <img style={{ borderRadius: "50%", width: '30px', height: '30px', cursor: "pointer" }} src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

// const imgStyles = {
//     borderRadius: "50%",
//     width: "30px",
//     height: "30px",
//     cursor: "pointer"
// }

export default Header;