import '../../scss/app.scss'
import Productos from '../Productos/Productos'
import React, { useContext } from 'react'
import { GlobalContext } from "../../Context/GlobalStateContext"

const Inicio = () => {

  return (
    <>
    <h1 className="text-center text-white mt-5">Bienvenidos a nuestra tienda virtual</h1>
    <p className="text-center parrafo text-white">Aquí encontrarás lo último en tecnología, ¡mira nuestros productos!</p>
    
    <Productos/>
    </>
  )
}

export default Inicio