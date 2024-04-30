import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';

import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ImagenesModule } from './imagenes/imagenes.module';
import { AnimalesModule } from './animales/animales.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PerfilAnimalModule } from './perfil-animal/perfil-animal.module';
import { PublicacionUsersModule } from './publicacion-users/publicacion-users.module';
import { ComentarioPublicacionModule } from './comentario-publicacion/comentario-publicacion.module';
import { PerfiLusuarioModule } from './perfi-lusuario/perfi-lusuario.module';
@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true,
  }),TypeOrmModule.forRoot({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    autoLoadEntities: true,
    synchronize: true,
    ssl: process.env.POSTGRES_SSL === "true",
    extra: {
      ssl:
        process.env.POSTGRES_SSL === "true"
          ? {
              rejectUnauthorized: false,
            }
          : null,
    },
  }), CloudinaryModule, ComentariosModule, ImagenesModule, AnimalesModule, CategoriaModule, PerfilAnimalModule, PublicacionUsersModule, ComentarioPublicacionModule, PerfiLusuarioModule],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
