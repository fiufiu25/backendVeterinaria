import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import {  RegisterUser } from './dto/create-user.dto';
import * as bcryptjs from "bcryptjs";
import { LoginDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UsersService,
        private readonly jwtService:JwtService
    ){

    }
    async register({nombre,email,password,confir_password}:RegisterUser){
        console.log(nombre,confir_password)
        const  user=await this.userService.findByEmail(email)
        console.log(user)
        if(user){
            throw new BadRequestException("User already exists ")
        }
       
        return this.userService.create({nombre,email,password: await bcryptjs.hash(password,10)})

    }
    async login( {email,password}:LoginDto){
        const user=await this.userService.findByEmailWithPassword(email)
        console.log(user)
         if(!user){
            throw new UnauthorizedException("credentials is wrong")
         }
         const isPasswordValid=await  bcryptjs.compare(password,user.password)
         if(!isPasswordValid){
            throw new UnauthorizedException("credentials is wrong")
         }
         const payload={nombre:user.nombre,email:user.email,rol:user.rol,id:user.id}
         const token=await this.jwtService.signAsync(payload)
         return{
            token,
            email,
            nombre:user.nombre
         }
    }
    async home(){
        return this.userService.findAll()
    }
}
