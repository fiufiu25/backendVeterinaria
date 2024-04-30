import { IsOptional, IsUrl } from "class-validator";



export class CreateImageneDto {
@IsOptional()
@IsUrl()
 url:string
 



}
