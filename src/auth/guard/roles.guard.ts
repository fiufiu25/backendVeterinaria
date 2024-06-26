import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Role } from '../enums/rol.enums';
import { ROLES_KEY } from '../decorators/roles.decorator';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean  {
  const requireRoles=this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
    context.getHandler(),
    context.getClass(),
    
  ]);
  if (!requireRoles) {
    return true;
  }
  console.log(requireRoles)
  const {user} = context.switchToHttp().getRequest();
  // if(user.role===Role.ADMIN){
  //   return true
  //  }
  
    
    return user.rol==requireRoles;
  }
}
