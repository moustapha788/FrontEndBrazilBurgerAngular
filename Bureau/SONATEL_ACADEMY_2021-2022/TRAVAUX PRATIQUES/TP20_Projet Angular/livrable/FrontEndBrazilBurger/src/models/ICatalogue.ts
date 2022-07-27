import { Burger } from "./Burger";
import { Menu } from "./Menu";

export interface ICatalogue {
    menus:Menu[];
    burgers:Burger[];
}