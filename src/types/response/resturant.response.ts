import { coordinates } from "../document/Iresturant";

export interface AdminLoginRes {
    TOKEN_KEY?: string;
    message?: string;
}
export interface ISaveResturantResponse{
    resturant_name:string
    resturant_location:coordinates
}
export interface INearByResturantResponse{
    resturant_name:string
    resturant_location:coordinates
}