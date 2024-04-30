import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentarioPublicacionService } from './comentario-publicacion.service';
import { CreateComentarioPublicacionDto } from './dto/create-comentario-publicacion.dto';
import { UpdateComentarioPublicacionDto } from './dto/update-comentario-publicacion.dto';
import { Auth } from 'src/auth/decorators/aurh.decorator';
import { Role } from 'src/auth/enums/rol.enums';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';

@Controller('comentario-publicacion')
export class ComentarioPublicacionController {
  constructor(private readonly comentarioPublicacionService: ComentarioPublicacionService) {}

  @Post()
  @Auth(Role.USER)
  create(@ActiveUser()user,@Body() createComentarioPublicacionDto: CreateComentarioPublicacionDto) {
    return this.comentarioPublicacionService.create(user,createComentarioPublicacionDto);
  }

  @Get()
  findAll() {
    return this.comentarioPublicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comentarioPublicacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComentarioPublicacionDto: UpdateComentarioPublicacionDto) {
    return this.comentarioPublicacionService.update(+id, updateComentarioPublicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comentarioPublicacionService.remove(+id);
  }
}
