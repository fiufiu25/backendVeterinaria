import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { Auth } from 'src/auth/decorators/aurh.decorator';
import { Role } from 'src/auth/enums/rol.enums';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post("crear")
  @UseInterceptors(FilesInterceptor('files'))
  @Auth(Role.USER)
  create(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }), // 5 MB
          new FileTypeValidator({ fileType:".(png|jpeg|jpg)" }) // Accepts only png, jpeg, jpg
        ]
        ,fileIsRequired: false,
      })
    ) files: Express.Multer.File[],
    @ActiveUser()user, @Body() createComentarioDto: CreateComentarioDto) {
    return this.comentariosService.create(files,user,createComentarioDto);
  }

  @Get()
  @Auth(Role.USER)
  findAll() {
    return this.comentariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comentariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComentarioDto: UpdateComentarioDto) {
    return this.comentariosService.update(+id, updateComentarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comentariosService.remove(+id);
  }
} 
