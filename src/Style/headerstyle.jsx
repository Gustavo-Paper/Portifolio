import styled from "styled-components";

export const StyleHeader = styled.header`
    
    display:flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
    background-color: #044476;
    


`

export const Navegacao = styled.ul`
display: flex;
justify-content: space-around;
width: 40vw;

background-color: #044476;

@media (max-width:800px){

    width:80vw;
}

`

export const StyleLi = styled.li`
    
    background-color: #044476;
    
    width:10vw;
    height: 5vh;

a:hover{
    
   
    box-shadow: 0px 0px 10px 8px  rgba(0, 0, 255, 0.6);;
}

a{
    color:#ffff;
    
}


`



