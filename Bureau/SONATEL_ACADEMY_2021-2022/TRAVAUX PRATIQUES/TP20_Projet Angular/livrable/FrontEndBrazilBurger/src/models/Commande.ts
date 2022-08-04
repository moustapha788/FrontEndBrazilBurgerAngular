export interface Commande {
    Produits: FormatCommande[]
}

export interface FormatCommande {
    quantite: number;
    produit: string
}

