import { coordinates } from "../document/iresturant";

export interface IUserRegisterRequest{
    user_name:string
    email:string
    address:string
}

export interface IDeleteUserRequest{
    userid:string
} 