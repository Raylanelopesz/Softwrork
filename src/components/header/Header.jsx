import React from "react";
import logo from "../../assets/logoo.png";
import { links } from "../../Data"
import { FaStream } from "react-icons/fa";
import "./header.css";

function Header() {

    return (
        <header className="header">
            <nav className="nav container">
                <a href="" className="nav__logo">
                    <img src={logo} alt="" className="nav__logo-img" />
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        {links.map(({ name, path }, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <a href={path} className="nav__link">
                                        {name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="nav__toggle">
                    <FaStream />
                </div>
            </nav>

        </header>
    )
}

export default Header;