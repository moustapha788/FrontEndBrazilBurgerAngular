import { Taille } from "./Taille"

export interface Boisson{
    id:number,
    nom:string,
    image:string
    taille:Taille,
    prix:number
}