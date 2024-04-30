import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Comentario } from './entities/comentario.entity';
import { ImagenesModule } from 'src/imagenes/imagenes.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { Imagene } from 'src/imagenes/entities/imagene.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Comentario,Imagene]),CloudinaryModule,ImagenesModule],
  controllers: [ComentariosController],
  providers: [ComentariosService],
  exports: [ComentariosService],
})
export class ComentariosModule {}
  