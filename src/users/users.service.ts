import { Injectable } from '@nestjs/common';

export type User={
    id:number
    name:string
    username:string
    password:string
}
@Injectable()
export class UsersService {
    private readonly user:User[]=[
        {
            id:1,
            name:'Tamil',
            username:'Tsk',
            password:'1234'
        },
        {
            id:2,
            name:'Rajesh',
            username:'RKK',
            password:'4321'
        },
    ]

    async findone(username:string):Promise<User|undefined>{
        return this.user.find(user=>user.username==username)
    }
}
