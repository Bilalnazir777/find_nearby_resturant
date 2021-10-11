import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { AdminLoginReq, IDeleteRestaurantRequest, INearByResturantRequest, ISaveResturantRequest } from "../types/request/resturant.request";
import { AdminLoginRes, ISaveResturantResponse } from "../types/response/resturant.response";
import jwt, { Secret } from "jsonwebtoken";
import { MainResturant } from "../repositries/resturant.repositries";
import { IResturantInfoRequest } from "../types/request/resturant.request";
import CustomeError from '../utills/error';
import { Irestaurant } from "../types/document/iresturant";
import { nearby } from "../modules/nearby.resturant";
require('dotenv').config();

@Route('resturant')
@Tags('resturant')

export class ResturantController {
    constructor() { }

    @Post('authAdmin')
    async authAdmin(@Body() admin: AdminLoginReq): Promise<AdminLoginRes> {
        return <AdminLoginRes>{
            TOKEN_KEY: jwt.sign(JSON.stringify(admin), <Secret>process.env.SECRET),
            Message: "Token Generated"
        }
    }

    @Post('/saveresturant')
    async saveresturant(@Body() resturant: ISaveResturantRequest): Promise<ISaveResturantResponse> {
        const save_resturant: any = await new MainResturant().saveresturant(<Irestaurant>resturant)
        return <ISaveResturantResponse>save_resturant
    }

    @Delete('/deleteresturant')
    @SuccessResponse("200", "user deleted")
    async deleteresturant(@Body() delreq: IDeleteRestaurantRequest) {
        return await new MainResturant().deleteresturant(delreq.restaurantid);
    }

    @Post("/resturantinfo")
    async resturantinfo(@Body() getreq: IResturantInfoRequest): Promise<ISaveResturantResponse> {
        const resturant: any = await new MainResturant().resturantinfo(getreq.resturantid);
        if (resturant === null) throw new CustomeError(404, 'restaurant not found');
        return <ISaveResturantResponse>resturant;
    }
    @Post("/nearbyresturant")
    async nearbyresturant(@Body() body: INearByResturantRequest): Promise<any> {
        const savedresturant: any = await new MainResturant().getDistance()
        const nearbyresturat = nearby(body, savedresturant)
        return nearbyresturat;
    }




}

