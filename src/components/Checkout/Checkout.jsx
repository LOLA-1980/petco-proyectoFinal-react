import React, { useState, useContext } from "react";
import { addDoc, doc, collection, getFirestore, writeBatch, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const { cart, clear, sumTotal } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, phone: telefono, email: email },
            items: cart.map(item => ({ id: item.id, title: item.name, quantity: item.quantity, price: item.price, price_total: item.quantity * item.price })),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((products) => {
            setOrderId(products.id);
            const batch = writeBatch(db);


            cart.forEach(item => {
                let producto = doc(db, "items", item.id);
                getDoc(producto).then((products) => {
                    batch.update(producto, { stock: products.data().stock - item.quantity });
                    batch.commit();
                });
            });

            clear();
        });
    }


    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Teléfono:</label>
                            <input type="number" className="form-control" placeholder="Ingrese su Teléfono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle text-end">{item.quantity}</td>
                                    <td className="align-middle text-end">${item.quantity * item.price}</td>
                                </tr>
                            ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end">Total a Pagar</td>
                                <td className="tetxt-end">${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <Navigate to={"/thanks/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;