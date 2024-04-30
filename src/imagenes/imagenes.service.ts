import { Injectable } from '@nestjs/common';
import { CreateImageneDto } from './dto/create-imagene.dto';
import { UpdateImageneDto } from './dto/update-imagene.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Imagene } from './entities/imagene.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagenesService {
  constructor (
    @InjectRepository(Imagene)
    
       private readonly imageneRepository:Repository<Imagene>
  ){}
  create(createImageneDto: CreateImageneDto) {
    return  this.imageneRepository.save(createImageneDto) ;
  }

  findAll() {
    return `This action returns all imagenes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagene`;
  }

  update(id: number, updateImageneDto: UpdateImageneDto) {
    return `This action updates a #${id} imagene`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagene`;
  }
}
