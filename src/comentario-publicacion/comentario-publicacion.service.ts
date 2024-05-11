import { Injectable } from '@nestjs/common';
import { CreateComentarioPublicacionDto } from './dto/create-comentario-publicacion.dto';
import { UpdateComentarioPublicacionDto } from './dto/update-comentario-publicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ComentarioPublicacion } from './entities/comentario-publicacion.entity';
import { Repository } from 'typeorm';
import { ComentariosService } from 'src/comentarios/comentarios.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ComentarioPublicacionService {
constructor(
  @InjectRepository(ComentarioPublicacion)
  private readonly comentarioPublicacionRepository:Repository<ComentarioPublicacion>,
  private readonly  comentarioService:ComentariosService,
  @InjectRepository(User)
  private readonly userRepository:Repository<User>,
){}

async  create(user,{comentario,idPublicacion}: CreateComentarioPublicacionDto) {
   const  usuario= await this.userRepository.findOneBy({id:user.id})
   const  publicacion=await this.comentarioService.findOne(idPublicacion)

    return await  this.comentarioPublicacionRepository.save({comentario,date:new Date(),comentarios:publicacion,user:usuario}) ;
  }

  findAll() {
    return  this.comentarioPublicacionRepository.find({relations:["user"],order:{id:"DESC"}});
  }

  findOne(id: number) {
    return `This action returns a #${id} comentarioPublicacion`;
  }

  update(id: number, updateComentarioPublicacionDto: UpdateComentarioPublicacionDto) {
    return `This action updates a #${id} comentarioPublicacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentarioPublicacion`;
  }
}
