import { coordinates } from "../document/Iresturant";

export interface IUserRegisterRequest{
    user_name:string
    email:string
    address:string
}

export interface IDeleteUserRequest{
    userid:string
} 