import { Roles } from "./roles";

export class Users {
    id: number=0
    username: string = "";
    password: string = "";
    enabled: boolean = true;
    role: Roles=new Roles();
}
