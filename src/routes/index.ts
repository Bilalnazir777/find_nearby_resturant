import express from 'express';
import { ResturantRoutesApi } from './resturant.route';
import { UserRoutesApi } from './user.route';

export class MainRouter {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.use('/resturant', ResturantRoutesApi);
        this.router.use('/user' , UserRoutesApi)
    }
}
export const MainApi = new MainRouter().router