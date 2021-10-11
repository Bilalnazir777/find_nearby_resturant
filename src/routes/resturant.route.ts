import express from 'express';
import { ResturantController } from '../controllers/resturant.controller';
import { AdminLoginReq, IDeleteRestaurantRequest, ISaveResturantRequest } from '../types/request/resturant.request';
import { IResturantInfoRequest } from '../types/request/resturant.request';
import { AdminLoginRes, ISaveResturantResponse } from '../types/response/resturant.response';

export class ResturantRoutes {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.post('/authAdmin', async (req, res, next) => {
            try {
                const admin: AdminLoginReq = req.body;
                const newAdmin: AdminLoginRes = await new ResturantController().authAdmin(admin);
                res.status(200).json({
                TOKEN_KEY: newAdmin.TOKEN_KEY,
                Message: newAdmin.message
            })
            } catch (error) {
                next(error);
            }
        })

      //save resturant
      this.router.post('/saveresturant', async (req, res, next) => {
        try {
          const resturant: ISaveResturantRequest = req.body;
          const newresturant:ISaveResturantResponse = await new ResturantController().saveresturant(resturant);
          res.status(200).json({
            message: newresturant
          });
        } catch (error) {
          next(error);
        }
      });

      //del resturant
      this.router.delete('/deleteresturant', async (req, res, next) => {
        try {
          const delreq:IDeleteRestaurantRequest = req.body;
          const Deleted_resturant = await new ResturantController().deleteresturant(delreq);
          res.status(200).json({
            message: 'resturant deleted'
          });
        } catch (error) {
          next(error);
        }
      });

      //resturant info

      this.router.post('/resturantinfo', async (req, res, next) => {
        try {
          const getreq:IResturantInfoRequest = req.body;
            const resturant:ISaveResturantResponse = await new ResturantController().resturantinfo(getreq);
            res.send(resturant);
        } catch (error) {
          next(error);
        }
      });

      //nearby resturant

      this.router.post('/nearbyresturant', async (req, res, next) => {
        try {
              const resturant =req.body
              const filtered_resturant = await new ResturantController().nearbyresturant(resturant);
              res.send(filtered_resturant)
        }catch(err){
            next(err)
        }
  })
    
    }
}
export const ResturantRoutesApi = new ResturantRoutes().router