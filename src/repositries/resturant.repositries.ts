import { ResturantSchema } from "../models/restaurant.model";
import { UserSchema } from "../models/user.model";
import { Irestaurant } from "../types/document/Iresturant";
const geolib = require('geolib');
import { getDistance } from 'geolib';
import { INearByResturantRequest } from "../types/request/resturant.request";


export class MainResturant {
    constructor() { }

    saveresturant(resturant:Irestaurant){
        return new ResturantSchema(resturant).save();
    }
    deleteresturant(_id:string){
        return ResturantSchema.findById(_id)
    }
    resturantinfo(_id:string){
        return ResturantSchema.findById(_id)
    }
   
    getDistance(){
         return ResturantSchema.find()
    }
    
}