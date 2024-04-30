import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(@InjectRepository(Categoria)
   private readonly categoriaModule:Repository<Categoria>
  ){}
  create(createCategoriaDto: CreateCategoriaDto) {

    return  this.categoriaModule.save(createCategoriaDto);
  }

  findAll() {
    return this.categoriaModule.find();
  }

  findOne( categoria) {
    return  this.categoriaModule.findOneBy({nombre:categoria});
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
