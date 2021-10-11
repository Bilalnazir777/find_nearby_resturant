import { coordinates } from "../document/Iresturant";

export interface AdminLoginReq {
    name: "admin";
    email: "admin@test.com";
    password: "admin@123";
}
export interface ISaveResturantRequest{
    resturant_name:string
    resturant_location:coordinates
}
export interface IDeleteRestaurantRequest{
    restaurantid:string
}
export interface INearByResturantRequest{
    location: coordinates
    radius:number
}
export interface IResturantInfoRequest{
    resturantid:string
}
