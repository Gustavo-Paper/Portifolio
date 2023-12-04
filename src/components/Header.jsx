import React from "react"
import { Link } from "react-router-dom"
import { StyleHeader, Navegacao, StyleLi } from "../Style/headerstyle"


function Header() {
    return (
        <StyleHeader>
            <nav>
                <Navegacao>

                    <StyleLi>
                        <Link to="/">Início</Link>
                    </StyleLi>
                    <StyleLi>
                        <Link to="/sobre">Sobre</Link>
                    </StyleLi>
                    <StyleLi>
                        <Link to="projetos">Projetos</Link>
                    </StyleLi>

                </Navegacao>
            </nav>
        </StyleHeader>


    )
}

export default Header;