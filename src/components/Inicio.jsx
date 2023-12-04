import React from "react"
import { StyleSection } from "../Style/styleInicio.jsx"
import * as S from "../Style/styleInicio.jsx";
import imgPerfil from "../assets/img-portifolio.jpg"
import linkedin from "../assets/linkedin-logo-bold.svg"
import github from "../assets/github-logo-bold.svg"
import youtube from "../assets/youtube-logo-bold.svg"

function Inicio() {
    return (
        <>
            <S.Stylemain>
                <S.StyleSection>
                    <S.divPerfil>
                        <p> Olá, sou o Gustavo Alexandre</p>
                        <p>Desenvolvedor Front-end</p>
                    </S.divPerfil>
                    <S.figura>
                        <S.fotoPerfil src={imgPerfil} alt="foto perfil" />
                    </S.figura>


                </S.StyleSection>
            </S.Stylemain>

            <S.StyleFooter>
                <S.NavRedes>
                <a href="https://www.linkedin.com/in/gustavo-almeida-57b2a3280/" target="_blank">
                    <img src={linkedin} alt="logo linkedin" />
                </a>

                <a href="https://github.com/Gustavo-Paper"  target="_blank">
                    <img src={github} alt="logo github" />
                </a>

                <a href="https://www.youtube.com/@paperman6211" target="_blank">
                    <img src={youtube} alt="logo youtube" />
                </a>
                </S.NavRedes>
            </S.StyleFooter>
        </>
    )
}
export default Inicio;

