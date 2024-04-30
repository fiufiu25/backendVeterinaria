import { Module } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { ImagenesController } from './imagenes.controller';
import { Imagene } from './entities/imagene.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from 'src/comentarios/entities/comentario.entity';
import { PublicacionUser } from 'src/publicacion-users/entities/publicacion-user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Imagene,Comentario,PublicacionUser])],
  controllers: [ImagenesController],
  providers: [ImagenesService],
  exports:[ImagenesService]
})
export class ImagenesModule {}
