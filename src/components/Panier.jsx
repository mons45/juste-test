import React, { useState } from "react";
import { Produit } from "./Produit";

export function Panier() {
    const [recape, setrecape] = useState(0);
    const StylePanier = {
        textDecoration: "none", 
        color: "red",
        border: "1px solid"
    };

    const produits = [
        {
            id: 1,
            nom: "PC",
            prix: 2000
        },
        {
            id: 2,
            nom: "SMARTPHONE",
            prix: 3000
        },
        {
            id: 3, 
            nom: "Ipad",
            prix: 1000
        }
    ];
    const calc = () => {
        const res = produits.reduce((total, produit) => total + Number(produit.prix), 0);
        setrecape(res);
    };

    return (
        <div>
            <h1>Liste de produits:</h1>
            <Produit Produits={produits} StylePanier={StylePanier}></Produit>

            <button onClick={calc}>calculer le total</button>
            <p>le total est, {recape} </p>
            
        </div>
    );
}
