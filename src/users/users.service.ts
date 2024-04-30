import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
 //inyectamos la identidad
 @InjectRepository(User)
 // indeccion de dependecia  Repository llama a  todos los metods de typeOrm 
 private readonly UserRepository:Repository<User>

  ){}
  create({nombre,email,password}: CreateUserDto) {
   
  return this.UserRepository.save({nombre,email,password});
  }

  findAll() {
    return this.UserRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  findByEmail(email:string){
    return this.UserRepository.findOneBy({email});

  }
  findByEmailWithPassword(email:string){
    return this.UserRepository.findOne({where:{email},select:["id","nombre","email","password","rol"]})

  }
}
