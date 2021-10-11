
import express from 'express';
import { UserController } from '../controllers/user.controller';
import { IDeleteUserRequest } from '../types/request/user.request';
import { IUserRegisterRequest } from '../types/request/user.request';
import { IUserRegisterResponse } from '../types/response/user.response';


export class UserRoutes {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
    //register user
        this.router.post('/registeruser', async (req, res, next) => {
            try {
                const user: IUserRegisterRequest = req.body;
                const newuser: IUserRegisterResponse = await new UserController().registerUser(user);
                res.status(200).json({
                    message: newuser
                });
            } catch (error) {
                next(error);
            }
        });

        //del user
        this.router.delete('/deleteuser', async (req, res, next) => {
            try {
                const delreq: IDeleteUserRequest = req.body;
                const Deleted_user = await new UserController().deleteuser(delreq);
                res.status(200).json({
                    message: 'user deleted'
                });
            } catch (error) {
                next(error);
            }
        });

        //checking user list

        this.router.post('/getuserlist', async (req, res, next) => {
            try {
              const userlist: IUserRegisterResponse[] = await new UserController().userList();
              res.status(200).json({
                result: userlist
              });
      
            } catch (error) {
              next(error);
            }
          });

    }
}

export const UserRoutesApi = new UserRoutes().router