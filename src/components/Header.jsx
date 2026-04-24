import { Link, NavLink } from "react-router-dom"
import "../styles/header.css"

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/src/assets/logo.png" alt="Elby logo" className="logo-img"/>
            </div>

            <nav>
                <NavLink to="/">Início</NavLink>
                <NavLink to="/about">Sobre Nós</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/gallery">Galeria</NavLink>
                <NavLink to="/orders">Encomendas</NavLink>
            </nav>
        </header>
    )
}

export default Header
