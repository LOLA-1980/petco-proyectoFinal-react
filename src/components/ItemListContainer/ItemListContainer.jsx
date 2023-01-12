import React, { useEffect, useState } from "react";
//import arrayProductos from "../json/productos.json";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    /*useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);*/


    //Proceso para cargar productos en nuestra collection
    /* useEffect(() => {
         const db = getFirestore();
         const itemsCollection = collection(db, "items");
 
         arrayProductos.forEach((item) => {
             addDoc(itemsCollection, item);
         });
     }, []);*/

    //Consulta a nuestra Coleccion de Datos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        //En caso de tener ID, filtro los productos por ID, sino traigo la coleccion completa
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

        getDocs(q).then((products) => {
            setItems(products.docs.map((doc) => ({ id: doc.id, ...doc.data() })
            ))
        });
    }, [id]);


    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;