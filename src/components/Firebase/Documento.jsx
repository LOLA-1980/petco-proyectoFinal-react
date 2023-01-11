import React, { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Documento = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();

        const item = doc(db, "items", "AVVzLqasi3EKcuhD6oIq");
        getDoc(item).then((snapShot) => {
            //console.log(data);
            if (snapShot.exists()) {
                console.log(snapShot.id)
            } else {
                console.log("El producto no existe!");
            }
        });
    }, []);


    return (
        <h1>Documento</h1>
    )
}

export default Documento;