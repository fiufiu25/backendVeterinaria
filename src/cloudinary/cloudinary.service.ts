import { Injectable } from '@nestjs/common';
import { CreateCloudinaryDto } from './dto/create-cloudinary.dto';
import { UpdateCloudinaryDto } from './dto/update-cloudinary.dto';
import {v2 as cloudinary} from "cloudinary"
import { CloudinaryResponse } from './cloudinary-response';
import * as streamifier from "streamifier";
@Injectable()
export class CloudinaryService {
  create(createCloudinaryDto: CreateCloudinaryDto) {
    return 'This action adds a new cloudinary';
  }

  findAll() {
    return `This action returns all cloudinary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cloudinary`;
  }

  update(id: number, updateCloudinaryDto: UpdateCloudinaryDto) {
    return `This action updates a #${id} cloudinary`;
  }

  remove(id: number) {
    return `This action removes a #${id} cloudinary`;
  }
  uploadFile(file:Express.Multer.File):Promise<CloudinaryResponse>{
    return new Promise<CloudinaryResponse>((resolve, reject)=>{
      const uploadStream=cloudinary.uploader.upload_stream(
        (error,result : CloudinaryResponse)=>{
          if(error)return reject(error);
          resolve(result)
        }
      )
    streamifier.createReadStream(file.buffer).pipe(uploadStream)
    })

  }
  async uploadFiles(files: Express.Multer.File[]): Promise<CloudinaryResponse[]> {
    const uploadPromises: Promise<CloudinaryResponse>[] = [];

    for (const file of files) {
      const promise = this.uploadFile(file);
      uploadPromises.push(promise);
    }

    return Promise.all(uploadPromises);
  }
}
