import React from "react";
import * as P from "../Style/projetosStylo.jsx";
import fantastika from "../assets/fantastika.png"
import disney from "../assets/disney.png"
import selfcare from "../assets/selfcare.png"
import coffer from "../assets/coffer.png"
import { Img } from "../Style/projetosStylo.jsx"
import { H1 } from "../Style/projetosStylo.jsx"
import { Figure } from "../Style/projetosStylo.jsx"
import { DivTitulos } from "../Style/projetosStylo.jsx";

function Projetos() {
    return (
        <section>
            <H1>PROJETOS</H1>
            <section>
                <Figure>
                    <a href="https://desafio-fantastika.vercel.app/" target="_blank">
                        <Img src={fantastika} alt="Site Fantastika" />
                    </a>

                    <a href="https://desafio-disney.vercel.app/" target="_blank">
                        <Img src={disney} alt="Site Filmes Disney" />
                    </a>

                    <a href="https://dev-selfcare.vercel.app/" target="_blank">
                        <Img src={selfcare} alt="" />
                    </a>
                </Figure>

                <DivTitulos>
                    <h2>Fantastika</h2>
                    <h4>HTML, CSS</h4>

                    <h2>Disney</h2>
                    <h4>HTML, CSS</h4>

                    <h2>Selfcare</h2>
                    <h4>HTML, CSS</h4>
                </DivTitulos>

                
                

            </section>
        </section>


    )
}

export default Projetos;