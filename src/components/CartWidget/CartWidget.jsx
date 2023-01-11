import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import './CartWidget.css';

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);
    return (
        <Link to={"/cart"} className="btn position-relative">
            <img src="images/cart-white.svg" alt="Carrito" width="60" />
            <span className="position-absolute notificacion badge rounded-pill bg-danger">{cartTotal()}</span>
            <span className="d-flex justify-content-center text-white position-relative bottom-20">Carrito</span>
        </Link>
    )
}

export default CartWidget;