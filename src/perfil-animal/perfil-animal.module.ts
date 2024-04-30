import { Module } from '@nestjs/common';
import { PerfilAnimalService } from './perfil-animal.service';
import { PerfilAnimalController } from './perfil-animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilAnimal } from './entities/perfil-animal.entity';
import { Animale } from 'src/animales/entities/animale.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PerfilAnimal,Animale])],
  controllers: [PerfilAnimalController],
  providers: [PerfilAnimalService],
  exports:[PerfilAnimalService
  ]
})
export class PerfilAnimalModule {}
