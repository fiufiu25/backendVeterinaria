import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
import { ImagenesService } from 'src/imagenes/imagenes.service';
import { User } from 'src/users/entities/user.entity';
import { Imagene } from 'src/imagenes/entities/imagene.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';


@Injectable()

export class ComentariosService {

  constructor(
    private readonly cloudinaryService:CloudinaryService,
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
 
    @InjectRepository(Imagene)
    private readonly imagenRepository:Repository<Imagene>,
    @InjectRepository(Comentario)
    private  readonly ComentarioRepository:Repository<Comentario> )
  {}
   async create( 
    
    files: Express.Multer.File[],
    user,
    {comentario="ola"}: CreateComentarioDto) {
      
    const userone=await this.userRepository.findOneBy({id:user.id})
    
    
    const nuevoComentario= await this.ComentarioRepository.save({ user:userone,comentario,date:new Date(),})
 console.log("ola",files)
if(files && files.length > 0){
  const urls = await this.cloudinaryService.uploadFiles(files);
  console.log(urls)
  const imagenes = urls.map(url => ({ url:url.url, comentario: nuevoComentario }));
  await this.imagenRepository.save(imagenes)
}  
   
 
    
   
    return nuevoComentario
  
  }

  findAll() {
    return this.ComentarioRepository.find({relations:["imagene"],order:{id:"DESC"}});
  }

  findOne(id: number) {
    return this.ComentarioRepository.findOneBy({id});
  }
 
  update(id: number, updateComentarioDto: UpdateComentarioDto) {
    return `This action updates a #${id} comentario`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentario`;
  }
}
