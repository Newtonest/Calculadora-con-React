import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx'
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from  'mathjs';
import Logo from './componentes/logo.jsx';

function App() {

const[input , setInput] = useState('') //aca declaro que la funcion setInput tiene un valor de estado:0 , por lo que cuando realicemos una operacion con esta funcion vamos a actualizar el estado de input , por eso debajo ponermos que cuando agregemos un valor se sume al valor inical del input que es un string vacio y asi mostrarlo en pantalla

const agregarInput = val =>{
  setInput(input + val);
}

const calcularResultado = ()=>{
  if(input){
    setInput(evaluate(input));
  } else{
    alert("por favor ingrese valores para realizar los calculos");
  }
 
}
return (
    <div className='App'>
    <Logo/>
 <div className='contenedor-calculadora'>
        <Pantalla input ={ input }/>
           <div className='fila'>
           <Boton manejarClic ={ agregarInput }>1</Boton>
           <Boton manejarClic ={ agregarInput }>2</Boton>
           <Boton manejarClic ={ agregarInput }>3</Boton>
           <Boton manejarClic ={ agregarInput }>+</Boton>
           </div>
           <div className='fila'>
           <Boton manejarClic={agregarInput}>4</Boton>
           <Boton manejarClic={agregarInput}>5</Boton>
           <Boton manejarClic={agregarInput}>6</Boton>
           <Boton manejarClic={agregarInput}>-</Boton>
           </div>
           <div className='fila'>
           <Boton manejarClic={agregarInput}>7</Boton>
           <Boton manejarClic={agregarInput}>8</Boton>
           <Boton manejarClic={agregarInput}>9</Boton>
           <Boton manejarClic={agregarInput}>*</Boton>
           </div>
           <div className='fila'>
           <Boton manejarClic={calcularResultado}>=</Boton>
           <Boton manejarClic={agregarInput}>0</Boton>
           <Boton manejarClic={agregarInput}>.</Boton>
           <Boton manejarClic={agregarInput}>/</Boton>
           </div>
           <div className='fila'>
            <BotonClear 
           manejarClear={()=> setInput('')}>Clear</BotonClear>
           </div>
       </div>
    </div>
    
 );
}

export default App;
