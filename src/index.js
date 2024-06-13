import React from "react";
import ReactDom from "react-dom/client"
import {Saludar, UserCard} from "./componets/Saludar"
import {Cabecera, SliderPrincipal} from "./componets/menu"
import {DetalleInfo} from "./componets/detalle"
//import './components/menu.css';

const root =ReactDom.createRoot(document.getElementById("root"));

function Saludos(){
    return(<h1>Saludos Estudiantes del TEC</h1>);
}

function Saludos2(){
    return(<h2>Mi primera App en React</h2>);
}

function Saludos3(){
    const titulo="Lluvias en el austro del Ecuador";
    return(
        <section>
            <h2>Test de Saludo {titulo}</h2>
            <p>Esta es la infomacion del Dcto</p>
        </section>
    );
}

//function menu(){
//    const titulo="Menu Principal"; 
//}

//root.render(<h1>Hola Mundo</h1>)
//una sola ruta enbudo o etiqueta
//root.render(<Saludos></Saludos>);
//        <UserCard name="Ramiro" amound={500} maried={false}></UserCard>

root.render
(
    <>
        <Cabecera></Cabecera>
        <SliderPrincipal></SliderPrincipal>
        <DetalleInfo></DetalleInfo>

        <menu/>
    </>
);
