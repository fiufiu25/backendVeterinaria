import { IsDate, IsOptional, IsString, MinLength } from "class-validator"

export class CreatePublicacionUserDto {
 @IsString()
 @MinLength(1)
 comentario:string;
 @IsString()
 @IsOptional()
 urls:string[];

}

