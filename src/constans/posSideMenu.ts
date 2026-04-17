import { PosSideMenu } from "@/types/posSideMenu";
import { 
    faUser, 
    faCoffee, 
    faMartiniGlass, 
    faCheese  
} from '@fortawesome/free-solid-svg-icons';

export const PosMenuItem: PosSideMenu[] = [
    {name: 'Coffee', href: '#', icon: faCoffee}, 
    {name: 'Non Coffee', href: '#', icon: faMartiniGlass},
    {name: 'Dessert', href: '#', icon: faCheese},
]