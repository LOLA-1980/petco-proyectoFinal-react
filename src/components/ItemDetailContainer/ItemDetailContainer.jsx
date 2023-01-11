import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import ItemDetail from "../ItemDetail/ItemDetail";
import arrayProductos from "../json/productos.json";
import Documento from "../Firebase/Documento";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        //console.log(typeof id)
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));// SIEMPRE VA A TRAER EL OBJETO 1
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);

    return (
        <div className="container">
            {/* <ItemDetail item={item} /> */}
            <Documento />
        </div>
    )
}

export default ItemDetailContainer;