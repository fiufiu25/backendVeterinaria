import { Controller, FileTypeValidator, Get, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryResponse } from './cloudinary/cloudinary-response';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly cloudinaryService:CloudinaryService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  uploadImage(
    
    @UploadedFiles(
      new ParseFilePipe({ 
        validators:[
          new MaxFileSizeValidator({maxSize:1024*1024*9}),
          new FileTypeValidator({fileType:".(png|jpeg|jpg)"})
        ]
      }
    ),)
   file:Express.Multer.File){
return this.cloudinaryService.uploadFile(file)
  }
  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadImages(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }), // 5 MB
          new FileTypeValidator({ fileType:".(png|jpeg|jpg)" }) // Accepts only png, jpeg, jpg
        ]
      })
    ) files: Express.Multer.File[]
  ): Promise<CloudinaryResponse[]> {
    return this.cloudinaryService.uploadFiles(files);
  }

  
}
