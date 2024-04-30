import { Injectable } from '@nestjs/common';
import { CreateAnimaleDto } from './dto/create-animale.dto';
import { UpdateAnimaleDto } from './dto/update-animale.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Animale } from './entities/animale.entity';
import { UsersService } from 'src/users/users.service';
import { CategoriaService } from 'src/categoria/categoria.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PerfilAnimal } from 'src/perfil-animal/entities/perfil-animal.entity';

@Injectable()
export class AnimalesService {
  constructor(
    private readonly cloudinaryService:CloudinaryService,
    @InjectRepository(Animale)
    private readonly animalModuel:Repository<Animale>,
    @InjectRepository(PerfilAnimal)
    private readonly imagenRepository:Repository<PerfilAnimal>,
    private  readonly  userService:UsersService,
    private  readonly  categoriaService:CategoriaService
    ,
  ){}
  async create(files: Express.Multer.File[],data,{nombre,edad,tipo,descripcion,genero}: CreateAnimaleDto) {
     console.log("olitas que me botas",files)
    const animals= await this.userService.findByEmail(data.email)
   
    const  animalCategoria= await this.categoriaService.findOne(tipo)
     const enviarAnimal= await this.animalModuel.save({nombre,descripcion,genero,fecha:new Date(),user:animals,edad,categoria:animalCategoria});
     await this.enviarImagen(files,enviarAnimal)
     
    return enviarAnimal
     
     
 
   
     
 
 
  }

  async findAll() {
     return await this.animalModuel.find({relations:["categoria","perfilAnimal"]});
      
  }

  findOne(id: number) {
    return `This action returns a #${id} animale`;
  }

  update(id: number, updateAnimaleDto: UpdateAnimaleDto) {
    return `This action updates a #${id} animale`;
  }

  remove(id: number) {
    return `This action removes a #${id} animale`;
  }
  private async enviarImagen(files,enviarAnimal){
    if(files && files.length > 0){
      const urls = await this.cloudinaryService.uploadFiles(files);
      console.log(urls)
      const imagenes = urls.map(url => ({url:url.url,animale:enviarAnimal}));
      
      return await this.imagenRepository.save(imagenes)
    } 
  }
}
 