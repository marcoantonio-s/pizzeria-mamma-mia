import React, { useState } from 'react'
import NavBar from './NavBar'
import { pizzaCart } from '../data/pizzas';

export default function Cart() {

const [pizzaCarta, setPizzaCarta] = useState (pizzaCart);

const modificarCantidad = (operacion, id)=>{
    let productoModificar = pizzaCarta.find(p => p.id === id)
    if(operacion === "suma"){
        productoModificar.count = productoModificar.count + 1
    } 
    if(operacion === "resta"){
        productoModificar.count = productoModificar.count - 1
    }
    if(productoModificar.count < 1){
        let productosActualizados = pizzaCarta.filter(p => p.id !== id)
        setPizzaCarta(productosActualizados)
        return
    }
    let productosActualizados = pizzaCarta.map(p => p.id === id ? productoModificar : p)

    setPizzaCarta(productosActualizados)
}

  return (
    <>
    <div className='container my-5'>
        <h1 className='fw-bold mb-3'>Detalles del pedido</h1>
        <div className='row'>
            <div className='col-md-6'>
                <ul className='px-0'>
                    {pizzaCarta.map((p, i) => 
                    <li key={i} className='border rounded mt-2 p-1' style={{listStyle: "none"}}>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img className='border rounded m-2' width={100} src={p.img} alt=""/> 
                                <h5>{p.name}</h5>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <p className='mx-4 mt-2'>Total: ${(p.price * p.count).toLocaleString()}</p>
                                <button className='btn btn-sm btn-dark'
                                onClick={()=>modificarCantidad("suma", p.id)}
                                >+</button>
                                <div className='mx-2'>
                                    <h6>{p.count}</h6> 
                                </div>
                                <button className='btn btn-sm btn-dark ms-1'
                                onClick={()=>modificarCantidad("resta", p.id)}
                                >-</button>
                            </div>
                        </div>
                    </li>)}
                </ul>

                <h3 className='fw-bold my-4'>Total: ${pizzaCarta.reduce((total, pizzaCarta) => total + (pizzaCarta.price * pizzaCarta.count), 0).toLocaleString()}</h3>
                <button className='btn btn-dark mt-3'>Finalizar Compra</button>

            </div>
        </div>
    </div>
    </>
  )
}