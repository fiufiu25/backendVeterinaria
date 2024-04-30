import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicacionUsersService } from './publicacion-users.service';
import { CreatePublicacionUserDto } from './dto/create-publicacion-user.dto';
import { UpdatePublicacionUserDto } from './dto/update-publicacion-user.dto';
import { Auth } from 'src/auth/decorators/aurh.decorator';
import { Role } from 'src/auth/enums/rol.enums';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';

@Controller('publicacion')
export class PublicacionUsersController {
  constructor(private readonly publicacionUsersService: PublicacionUsersService) {}

  @Post("crear")
  @Auth(Role.USER)
  create( @ActiveUser()user,@Body() createPublicacionUserDto: CreatePublicacionUserDto) {
    return this.publicacionUsersService.create(user,createPublicacionUserDto);
  }

  @Get()
  findAll() {
    return this.publicacionUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicacionUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublicacionUserDto: UpdatePublicacionUserDto) {
    return this.publicacionUsersService.update(+id, updatePublicacionUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicacionUsersService.remove(+id);
  }
}
