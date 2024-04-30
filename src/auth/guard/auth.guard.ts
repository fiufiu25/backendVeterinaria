import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { jwtConstants } from '../constants/jwt.constant';

@Injectable()
//para aser la autencticacion con jwt necesitas crear carpeta guard "comando,:nest g guard auth/guard/auth --flat"
export class AuthGuard implements CanActivate {
  constructor (
    private readonly jwtService:JwtService
  ){}
  async canActivate(
    context: ExecutionContext,
  ):Promise<boolean>  {
 //me ayuda acceder al header
    const request=context.switchToHttp().getRequest()
    
    const token=this.extractTokenFromHeader(request)
  
    if(!token){
      throw new UnauthorizedException();

    }
    try {
      const payload=await this.jwtService.verifyAsync(token,{secret:jwtConstants.secret})
     
      request["user"]=payload
    } catch (error) {
    console.log(error)
    }
    return true;
  }
  private extractTokenFromHeader(req:Request):string|undefined{
  const [type,token]=req.headers.authorization?.split(" ")??[];
  return type=="Bearer"?token:undefined
  }
}
