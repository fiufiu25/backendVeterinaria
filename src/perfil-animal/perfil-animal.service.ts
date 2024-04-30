import { Injectable } from '@nestjs/common';
import { CreatePerfilAnimalDto } from './dto/create-perfil-animal.dto';
import { UpdatePerfilAnimalDto } from './dto/update-perfil-animal.dto';

@Injectable()
export class PerfilAnimalService {
  create(createPerfilAnimalDto: CreatePerfilAnimalDto) {
    return 'This action adds a new perfilAnimal';
  }

  findAll() {
    return `This action returns all perfilAnimal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perfilAnimal`;
  }

  update(id: number, updatePerfilAnimalDto: UpdatePerfilAnimalDto) {
    return `This action updates a #${id} perfilAnimal`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfilAnimal`;
  }
}
