import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilAnimalService } from './perfil-animal.service';
import { CreatePerfilAnimalDto } from './dto/create-perfil-animal.dto';
import { UpdatePerfilAnimalDto } from './dto/update-perfil-animal.dto';

@Controller('perfil-animal')
export class PerfilAnimalController {
  constructor(private readonly perfilAnimalService: PerfilAnimalService) {}

  @Post()
  create(@Body() createPerfilAnimalDto: CreatePerfilAnimalDto) {
    return this.perfilAnimalService.create(createPerfilAnimalDto);
  }

  @Get()
  findAll() {
    return this.perfilAnimalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilAnimalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilAnimalDto: UpdatePerfilAnimalDto) {
    return this.perfilAnimalService.update(+id, updatePerfilAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilAnimalService.remove(+id);
  }
}
