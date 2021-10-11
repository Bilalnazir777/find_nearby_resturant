import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { MainUser } from "../repositries/user.repositries"
import { IUser } from "../types/document/Iuser"
import { IDeleteUserRequest } from "../types/request/user.request";
import { IUserRegisterRequest } from "../types/request/user.request"
import { IUserRegisterResponse } from "../types/response/user.response"



@Route('user')
@Tags('user')

export class UserController {
    constructor() { }

    @Post('/registeruser')
    async registerUser(@Body() user: IUserRegisterRequest): Promise<IUserRegisterResponse> {
        const save_user: IUser = <any>await new MainUser().registeruser(<IUser>(user))
        return <IUserRegisterResponse>save_user
    }

    @Delete('/deleteuser')
    @SuccessResponse("200", "user deleted")
    async deleteuser(@Body() delreq: IDeleteUserRequest) {
        return await new MainUser().deleteuser(delreq.userid);
    }

    @Post('/getuserlist')
    async userList(): Promise<IUserRegisterRequest[]> {
        const user: IUser[] = await new MainUser().userlist();
        return <IUserRegisterResponse[]>(user);
    }
}