import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(1)
    nombre:string;
    @IsEmail()

    email:string;
    @Transform(({value})=>value.trim())
    @MinLength(6)
    @IsString()
    password:string;
    @Transform(({value})=>value.trim())
    @MinLength(6)
    @IsString()
    confir_password?:string;
    
}
