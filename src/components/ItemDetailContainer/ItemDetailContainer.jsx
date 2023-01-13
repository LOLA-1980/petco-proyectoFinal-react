import React, { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();

        const item = doc(db, "items", id);
        getDoc(item).then((products) => {
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