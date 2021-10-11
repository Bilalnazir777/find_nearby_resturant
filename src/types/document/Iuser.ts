import { Document } from "mongoose";
export interface IUser extends Document {
    user_name: string
    email: string
    address: string
}