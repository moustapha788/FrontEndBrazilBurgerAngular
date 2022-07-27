import { Boisson } from "./Boisson"
import { Burger } from "./Burger"

export interface Menu {
    id: number;
    nom: string
    burgers: Burger[],
    boissons: Boisson[],
    image: string[];
    prix: number,
}