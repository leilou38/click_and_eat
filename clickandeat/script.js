const produit = { // Créer une const avec le nom produit pour pouvoir l'ajouter au panier // 
    nom: "Produit A",
    prix: 100,
    quantite: 1
};

function calculerDevis(produit){ // une fonction pour que ça calcule un devis en fonction du produit que la personne commande // 
    const total = produit.prix * produit.quantite;
    return{
        nom: produit.nom,
        quantite: produit.quantite,
        total: total
    };
}

const devis = calculerDevis(produit);
console.log('Devis pour ${devis.quantite} x ${devis.nom}: prix unitaire: ${devis.prixUnitaire}€ total: ${devis.total}')

//Ce code définit un produit, calcule le devis en fonction de la quantité commandée et affiche le résultat.// 