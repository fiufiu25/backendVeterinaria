import { IsNumber, IsOptional,IsString  } from "class-validator";


export class CreateCategoriaDto {
 @IsString()
    nombre:string;
    @IsOptional()
    @IsNumber()
     userId:number;
     @IsOptional()
    @IsString()
    Categoria:string
    }
    
    


