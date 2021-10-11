import { Schema, model } from 'mongoose';
import { Irestaurant } from '../types/document/Iresturant';

const IResturantSchema = new Schema(
    {
        resturant_name: { type: String },
        resturant_location: {
            latitude: {type: Number},
            longitude: {type: Number}
        },


    },
    { timestamps: true }
);
export const ResturantSchema = model<Irestaurant>('IResturantSchema', IResturantSchema);