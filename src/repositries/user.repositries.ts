

import { ResturantSchema } from '../models/restaurant.model';
import { UserSchema } from '../models/user.model';
import { IUser } from '../types/document/Iuser';


export class MainUser {
    constructor() { }

    registeruser(user: IUser) {
        return new UserSchema(user).save();
    }
   
    userlist(){
        return UserSchema.find()
    }
    deleteuser(_id: string) {
        return UserSchema.findByIdAndDelete(_id);
    }

}