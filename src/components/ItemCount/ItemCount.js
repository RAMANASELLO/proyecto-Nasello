import {useState} from 'react'


const Counter = ({onAdd, stock, initial}) => {
const [contador,setContador]=useState(0)
    const suma=() => {
        
      if (contador<stock) {
        setContador( contador + 1)
      }
    }
    const resta=() => {

      if (contador>initial) {
        setContador ( contador - 1)
      }
        
    }
  return (
      <>
        <div>Carrito</div>
        <h2>{contador}</h2>
        <button className="boton" disabled={contador>9} onClick={suma}>+</button>
        <button className="boton" disabled={contador <= 0}  onClick={resta}>-</button>
        <button onClick={()=>onAdd("Agregado")}>Agregar al carrito</button>
      </>
    

  )
}

export default Counter