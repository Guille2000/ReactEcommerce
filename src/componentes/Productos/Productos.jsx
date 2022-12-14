import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalStateContext'
import '../../scss/app.scss'


const Productos = () => {
  const {productos, añadirProducto} = useContext(GlobalContext)
  return (
    <div className="container-lg">
    <div className="row">
      {
        productos.map(producto => {
          return(
            <div className="card mt-2" key={producto.id}>
            <img className="card-img-top img-fluid mt-2" src={producto.img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Titulo: {producto.nombre}</h5>
              <p className="card-text">Precio: {producto.precio}</p>
              <p className="card-text">Descripcion: {producto.desc}</p>
              <p className="card-text">Cantidad: {producto.cantidad}</p>

              <button onClick={() => añadirProducto(producto.id)} className="btn btn-danger">Añadir al carrito</button>
            </div>
          </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Productos