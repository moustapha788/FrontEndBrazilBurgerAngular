import { Boisson } from "./Boisson"
import { Burger } from "./Burger"
import { Frite } from "./Frite";
import { Image } from "./Image";
import {  BoissonMenu, BurgerMenu, FriteMenu } from "./SubProduct";

export interface Menu {
    id: number;
    nom: string
    burgers: BurgerMenu[],
    tailles: BoissonMenu[],
    images: Image[];
    frites:FriteMenu[];
    prix: number,
    quantite:number;
    choosen:boolean;

}