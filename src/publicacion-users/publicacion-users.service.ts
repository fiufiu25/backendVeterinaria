import { Injectable } from '@nestjs/common';
import { CreatePublicacionUserDto } from './dto/create-publicacion-user.dto';
import { UpdatePublicacionUserDto } from './dto/update-publicacion-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicacionUser } from './entities/publicacion-user.entity';
import { Repository } from 'typeorm';
import { Imagene } from 'src/imagenes/entities/imagene.entity';

@Injectable()
export class PublicacionUsersService {
  constructor(
    @InjectRepository(PublicacionUser)
    private readonly publicacionUserRepository:Repository<PublicacionUser>
   ,@InjectRepository(Imagene)
   private readonly ImageneRepository:Repository<Imagene>

    ){}
  async create(user,{comentario,urls}: CreatePublicacionUserDto) {
      const usuario= await this.publicacionUserRepository.findOneBy({id:user.id})
    if(!urls){
      return await this.publicacionUserRepository.save({comentario,date:new Date(),user:usuario})

     }
      const enviarPublicacion= await this.publicacionUserRepository.save({comentario,date:new Date(),user:usuario})
      const imagenes = urls.map(url => ({ url:url, publicacionUser: enviarPublicacion }));
      
      await this.ImageneRepository.save(imagenes)
      return enviarPublicacion
     
     
     
  }

  findAll() {
    return `This action returns all publicacionUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicacionUser`;
  }

  update(id: number, updatePublicacionUserDto: UpdatePublicacionUserDto) {
    return `This action updates a #${id} publicacionUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicacionUser`;
  }
}
