import { Schema, model } from 'mongoose';
import { IUser } from '../types/document/iuser';

const IUserSchema = new Schema(
    {
        user_name: { type: String },
        email: { type: String },
        address: { type: String },
       

    },
    { timestamps: true }
);
export const UserSchema = model<IUser>('IUSERSchema', IUserSchema);