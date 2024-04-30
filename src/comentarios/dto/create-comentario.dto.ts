import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateComentarioDto {

@IsString()
@MinLength(1)
comentario:string;
@IsOptional()
 
  files?: Express.Multer.File[];
  @IsOptional()
@IsNumber()
 userId:number;
}

 