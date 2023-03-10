import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, cartTotal, clear, removeItem, sumTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-primary" role="alert">No se encontraron Productos en el Carrito!</div>
                        <Link to={"/"} className="btn btn-primary">Regresar a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-primary">Vaciar el Carrito</Link></th>
                            </tr>
                            <tr>
                                <th>&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.quantity * item.price}</td>
                                    <td><Link onClick={() => { removeItem(item.id) }}><img src={"/images/basura.svg"} alt={"Eliminar Producto"} width={32} /></Link></td>
                                </tr>
                            ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td>Total a Pagar</td>
                                <td>${sumTotal()}</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-primary">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;