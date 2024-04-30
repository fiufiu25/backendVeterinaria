import { Module } from '@nestjs/common';
import { ComentarioPublicacionService } from './comentario-publicacion.service';
import { ComentarioPublicacionController } from './comentario-publicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentarioPublicacion } from './entities/comentario-publicacion.entity';
import { Comentario } from 'src/comentarios/entities/comentario.entity';
import { ComentariosModule } from 'src/comentarios/comentarios.module';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ComentarioPublicacion,Comentario,User]),ComentariosModule],
  controllers: [ComentarioPublicacionController],
  providers: [ComentarioPublicacionService],
})
export class ComentarioPublicacionModule {}
