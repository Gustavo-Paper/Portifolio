import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Inicio from "./components/Inicio";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Header from "./components/Header";
import { GlobalStyle } from "./Style/global";


function App(){
  return(
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/projetos" element={<Projetos/>}/>
      <Route path="/Sobre" element={<Sobre/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App; 