import { Module } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { AnimalesController } from './animales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animale } from './entities/animale.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { CategoriaModule } from 'src/categoria/categoria.module';

import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

import { PerfilAnimalModule } from 'src/perfil-animal/perfil-animal.module';
import { PerfilAnimal } from 'src/perfil-animal/entities/perfil-animal.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Animale,Categoria,User,PerfilAnimal]),UsersModule,CategoriaModule,PerfilAnimalModule,CloudinaryModule],
  controllers: [AnimalesController],
  providers: [AnimalesService],
})
export class AnimalesModule {}
