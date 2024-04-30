import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUser } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { AuthGuard } from './guard/auth.guard';
import { Roles } from './decorators/roles.decorator';
import { Role } from './enums/rol.enums';
import { RolesGuard } from './guard/roles.guard';
import { Auth } from './decorators/aurh.decorator';

@Controller('auth')
export class AuthController {
constructor(private readonly authService:AuthService){}
@Post("register")
register(@Body() registerDto:RegisterUser ){
return this.authService.register(registerDto)
}
@Post("login")
login(@Body() loginDto:LoginDto){
    return this.authService.login(loginDto)
}
@Get("home")
@Auth(Role.USER)
home(){ 
    return this.authService.home()
}

}
