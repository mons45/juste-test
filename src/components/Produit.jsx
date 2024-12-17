import React from "react";

export function Produit(Props) {
    const StyleProduit = {
        display: "block",
        textAlign: "center" ,
        widht: "400px",
        height: "auto"
    };
    const Produits = Props.Produits;
    
    return (
        <>
            {Produits.map((produit) => {
                return (
                    <div style={StyleProduit}>
                        <ul style={Props.StylePanier}>
                        <li key={produit.id}>
                            id: {produit.id} nom: {produit.nom} prix: {produit.prix}
                        </li>
                        
                        </ul>
                    </div>
        )})}
        </>
    );
}
