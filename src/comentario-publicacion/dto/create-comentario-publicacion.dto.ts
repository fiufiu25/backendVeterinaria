import { IsNumber, IsString } from "class-validator";

export class CreateComentarioPublicacionDto {
    @IsString()
    comentario:string;
    @IsNumber()
    idPublicacion:number;
}
