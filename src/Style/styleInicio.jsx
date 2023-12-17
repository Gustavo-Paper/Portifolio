import styled from "styled-components";

export const StyleSection = styled.section`
    

display: flex;
justify-content: space-around;
align-items: center;
height: 80vh;
background-color: #1E1E1E;

div:hover{
  box-shadow: 0px 5px 5px 15px #247fc4;
  background-color: #247fc4;
  color:#ffff;
}


`

export const fotoPerfil = styled.img`
    margin-top: 2em;
    border-radius: 50px;
    height: 50vh;

    @media (max-width:800px){

  display:none;

}
    
`

export const figura = styled.figure`
  height: 70vh;
  


  img:hover{
    box-shadow: 0px 5px 5px 8px #247fc4;
  }
`

export const divPerfil = styled.div`
    color:#ffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
    
    p{
      font-weight:700;
    }

    @media (max-width:800px){

    height: 20vh;
    width: 80vw;

    }
`
export const Stylemain = styled.main`

height: 70vh;
width: 100vw;

`

export const StyleFooter = styled.footer`
  width: 100vw;
  height:15vh;
  background-color: #044476;

  @media (max-width:800px){

  width: 100%;
  height: 200px;
}

`

export const NavRedes = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
  height: 12vh;

  @media (max-width:800px){

display: flex;
flex-direction: column;
width: 100%;
height: 200px;

}
  
`

export const asRedes = styled.a`
  
  img:hover{
    
    box-shadow: 0px 5px 5px 8px #247fc4;
}

`

