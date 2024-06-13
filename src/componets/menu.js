import React, { useState } from 'react';
import "./menu.css";

export function Cabecera() {
    const [fijacionesVisible, setFijacionesVisible] = useState(false);
  
    const toggleFijaciones = () => {
      setFijacionesVisible(!fijacionesVisible);
    };
  
    return (
      <div className="contenedorCabecera">
        <header className="cabeceraPrincipal">
        <h1>Exportadora Agricola Boncao</h1>

            <ul class="menu__links">
                <li class="menu__item">
                    < a href="#" class="menu__link">Inicio</a>
                </li>

                <li class="menu__item menu__item--show">
                    <a href="#" class="menu_link">Fijaciones </a>

                    <ul class="menu_nesting">
                        <li class="menu__inside">
                            <a href="#" class="menu__link menu_link--inside">Nueva fijacion</a>
                        </li>
                        <li class="menu__inside">
                            <a href="#" class="menu__link menu_link--inside">Nueva fijacion</a>
                        </li>
                    </ul>
                </li>

                <li class="menu__item menu__item--show">
                    <a href="#" class="menu_link">Recepcion</a>

                    <ul class="menu_nesting">
                        <li class="menu__inside">
                            <a href="#" class="menu__link menu_link --inside">Recepcion de Producto</a>
                        </li>
                        <li class="menu__inside">
                            <a href="#" class="menu__link menu_link --inside">Consulta de Fijacion</a>
                        </li>
                    </ul>
                </li>
            </ul>



          
        </header>
      </div>
    );
  }

export function SliderPrincipal() {
  return (
    <div className="sliderPrinipal">
      <img
        src="https://spapps-f1b666286378e2.spapps.eafit.edu.co/innovacion/consultoria-proyectos/e_App_Slider/imagenesSlider/Galer%C3%ADa-Efecto%20Cacao/banner%20-EFECTOCACAO_Mesa%20de%20trabajo%201.jpg"
        alt="Slider principal"
        width="80px"
      ></img>
    </div>
  );
}
