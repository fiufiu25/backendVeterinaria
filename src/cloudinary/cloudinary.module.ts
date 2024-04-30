import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryController } from './cloudinary.controller';
import { CludinaryProvider } from './cloudinary.provider';

@Module({
  controllers: [CloudinaryController],
  providers: [CloudinaryService,CludinaryProvider],
  exports:[CloudinaryService,CludinaryProvider]
})
export class CloudinaryModule {}
