import styled from "styled-components";

export const h2Sobre = styled.h2`
    
    text-align: center;
    color:#ffff;

`


export const SectionSobre = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 100vh;
width: 100vw;
background-color:  #1E1E1E;
color:#ffff;

@media (max-width:800px){
    background-color:  #1E1E1E;


}

`

export const SobreP = styled.p`
    
    padding: 2em;
    width: 80vw;
    

@media (max-width:800px){

height: 30vh;
width: 70vh;
}

`
