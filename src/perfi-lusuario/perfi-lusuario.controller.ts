import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfiLusuarioService } from './perfi-lusuario.service';
import { CreatePerfiLusuarioDto } from './dto/create-perfi-lusuario.dto';
import { UpdatePerfiLusuarioDto } from './dto/update-perfi-lusuario.dto';

@Controller('perfi-lusuario')
export class PerfiLusuarioController {
  constructor(private readonly perfiLusuarioService: PerfiLusuarioService) {}

  @Post()
  create(@Body() createPerfiLusuarioDto: CreatePerfiLusuarioDto) {
    return this.perfiLusuarioService.create(createPerfiLusuarioDto);
  }

  @Get()
  findAll() {
    return this.perfiLusuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfiLusuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfiLusuarioDto: UpdatePerfiLusuarioDto) {
    return this.perfiLusuarioService.update(+id, updatePerfiLusuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfiLusuarioService.remove(+id);
  }
}
