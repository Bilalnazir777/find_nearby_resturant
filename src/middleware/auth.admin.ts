import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import CustomError from '../utills/error';
import { AdminLoginReq } from "../types/request/resturant.request";

const conf = process.env

export const tokenVerify = async function (req: Request, res: Response, next: NextFunction) {
    let token: any = req.header('token');

    if (!token) {
        let err = new CustomError(403, "Admin token is required/Login");
        next(err);
    } else {
        try {
            const decoded = jwt.verify(token, <jwt.Secret>conf.TOKEN_KEY);
            res.locals.body = <AdminLoginReq> decoded;
            next();
        } catch (error) {
            next(error);
        }
    }
}