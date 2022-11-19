import React from "react";
import '../hojas-de-estilo/boton.css'
function Boton(props){
	const esOperador = (valor)=>{
		return isNaN(valor) && (valor !='.') && (valor !='=');
	};

return(
	<div
	className={`boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
	onClick = {()=>props.manejarClic(props.children)}//Estas funciones sin nombre son llamadas funciones anonimas y sirven para cuando solo se van a utliziar y llamar una sola vez.Si no ponemos la sintaxis de la funcion flecha antes es una llamada a una funcion y no una funcion en si, porque no necesitamos el valor retornado de la llamada de una funcion si no que se ejecute una funcion cada vez que le demos al click.aca ponemos props.manejarClic porque en todos es igual a la funcion de añadir un valor, y luego pasamos el parametro props.children para que la funcion de agregar un valor lo tome como parametro
	 >
		{props.children}
	</div>
)
}
export default Boton;