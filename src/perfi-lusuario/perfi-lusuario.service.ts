import { Injectable } from '@nestjs/common';
import { CreatePerfiLusuarioDto } from './dto/create-perfi-lusuario.dto';
import { UpdatePerfiLusuarioDto } from './dto/update-perfi-lusuario.dto';

@Injectable()
export class PerfiLusuarioService {
  create(createPerfiLusuarioDto: CreatePerfiLusuarioDto) {
    return 'This action adds a new perfiLusuario';
  }

  findAll() {
    return `This action returns all perfiLusuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perfiLusuario`;
  }

  update(id: number, updatePerfiLusuarioDto: UpdatePerfiLusuarioDto) {
    return `This action updates a #${id} perfiLusuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfiLusuario`;
  }
}
