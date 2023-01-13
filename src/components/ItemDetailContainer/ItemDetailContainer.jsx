import React, { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
//import arrayProductos from "../json/productos.json";
//import Documento from "../Firebase/Documento";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    /*useEffect(() => {
        //console.log(typeof id)
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));// SIEMPRE VA A TRAER EL OBJETO 1
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);*/

    useEffect(() => {
        const db = getFirestore();

        const item = doc(db, "items", id);
        getDoc(item).then((products) => {
            //console.log(data);
            if (products.exists()) {
                console.log(products.data());
                setItem({ id: products.id, ...products.data() });
                setLoading(false);
            } else {
                console.log("El producto no existe!");
            }
        });
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;