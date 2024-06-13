//import "./Saludar.css" 

export function Saludar(props){
    const titulo="Nueva informacion desde un componente externo";
    return(
        <section>
            <h2>Nombre de la notnicia: &emsp; {titulo}</h2>
            <p>Esta es la infomacion de: {props.titulo}</p>
        </section>
    );
}

export function UserCard(props){
    console.log(props);
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.amound}</p>
            <p>{props.maried? "maried":"single"}</p>
            <ul>
                <li>Ciudad: {props.address.city}</li>
                <li>Direccion: {props.address.street}</li>
            </ul>
        </div>
    );
    
}

//tabulador grande &emsp
//tabulador pequeño &ensp