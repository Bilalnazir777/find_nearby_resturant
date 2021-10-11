import { Document } from "mongoose";

export interface Irestaurant extends Document {
    resturant_name: string
    resturant_location: coordinates
}
export interface coordinates {
    latitude: number
    longitude: number
}