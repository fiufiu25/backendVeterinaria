import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { CreateAnimaleDto } from './dto/create-animale.dto';
import { UpdateAnimaleDto } from './dto/update-animale.dto';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { Auth } from 'src/auth/decorators/aurh.decorator';
import { Role } from 'src/auth/enums/rol.enums';
import { FilesInterceptor } from '@nestjs/platform-express';



@Controller('animales')
export class AnimalesController {

  constructor(
   
    private readonly animalesService: AnimalesService) {}
    
  
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  @Auth(Role.USER)
  create(@UploadedFiles(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }), // 5 MB
        new FileTypeValidator({ fileType:".(png|jpeg|jpg)" }) // Accepts only png, jpeg, jpg
      ],
      fileIsRequired:false
    })
  ) files: Express.Multer.File[],@ActiveUser()user,@Body() createAnimaleDto: CreateAnimaleDto) {
     
    return  this.animalesService.create(files,user,createAnimaleDto);
  }

  @Get()
  findAll() {
    return this.animalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimaleDto: UpdateAnimaleDto) {
    return this.animalesService.update(+id, updateAnimaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalesService.remove(+id);
  }
}
