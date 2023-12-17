import React from "react";
import * as P from "../Style/projetosStylo.jsx";
import fantastika from "../assets/fantastika.png"
import disney from "../assets/disney.png"
import selfcare from "../assets/selfcare.png"
import { Img } from "../Style/projetosStylo.jsx"
import { Figure } from "../Style/projetosStylo.jsx"
import { DivTitulos } from "../Style/projetosStylo.jsx";
import { sectionProjeto } from "../Style/projetosStylo.jsx";

function Projetos() {
    return (
        <P.sectionProjeto>
            
            <P.sectionProjeto>
                <P.Figure>
                    <a href="https://desafio-fantastika.vercel.app/" target="_blank">
                        <Img src={fantastika} alt="Site Fantastika" />
                    </a>

                    <a href="https://desafio-disney.vercel.app/" target="_blank">
                        <Img src={disney} alt="Site Filmes Disney" />
                    </a>

                    <a href="https://dev-selfcare.vercel.app/" target="_blank">
                        <Img src={selfcare} alt="" />
                    </a>
                </P.Figure>

                <P.DivTitulos>
                    <h2>Fantastika</h2>
                    <h4>HTML, CSS</h4>

                    <h2>Disney</h2>
                    <h4>HTML, CSS</h4>

                    <h2>Selfcare</h2>
                    <h4>HTML, CSS</h4>
                </P.DivTitulos>

                
                

            </P.sectionProjeto>
        </P.sectionProjeto>


    )
}

export default Projetos;