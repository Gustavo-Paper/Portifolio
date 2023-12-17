import styled from "styled-components";

export const StyleHeader = styled.header`
    
    display:flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 100vw;
    background-color: #044476;
    
    nav {
        display: flex;
        align-items: center;
        
    }


`

export const Navegacao = styled.ul`
display: flex;
justify-content: space-around;
width: 40vw;

background-color: #044476;


@media (max-width:800px){
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
    height: 20vh;
    width:100vw;

}

`

export const StyleLi = styled.li`
    
    background-color: #044476;
    
    width:10vw;
    height: 5vh;

a:hover {
    
    text-decoration: underline #247fc4;
}

a{
    color:#ffff;
    
}


`



