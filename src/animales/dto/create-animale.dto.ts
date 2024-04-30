import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateAnimaleDto {
 @IsString()
    nombre:string
    @IsString()
    edad:string
    @IsOptional()
    @IsDate()
    fecha:Date;
    @IsOptional()
    @IsString()
    tipo:string;
    @IsOptional()
    @IsString()
    descripcion:string;

    
 
}
