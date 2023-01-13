import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "../Loading/Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    //Consulta a nuestra Coleccion de Datos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        //En caso de tener ID, filtro los productos por ID, sino traigo la coleccion completa
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

        getDocs(q).then((products) => {
            setItems(products.docs.map((doc) => ({ id: doc.id, ...doc.data() })
            ));
            setLoading(false);
        });
    }, [id]);


    return (
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;