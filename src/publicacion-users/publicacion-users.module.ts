import { Module } from '@nestjs/common';
import { PublicacionUsersService } from './publicacion-users.service';
import { PublicacionUsersController } from './publicacion-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicacionUser } from './entities/publicacion-user.entity';
import { Imagene } from 'src/imagenes/entities/imagene.entity';

@Module({ 
  imports:[TypeOrmModule.forFeature([PublicacionUser,Imagene])],
  controllers: [PublicacionUsersController],
  providers: [PublicacionUsersService],
  exports:[PublicacionUsersService]
})
export class PublicacionUsersModule {}
