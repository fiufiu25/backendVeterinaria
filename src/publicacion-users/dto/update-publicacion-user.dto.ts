import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicacionUserDto } from './create-publicacion-user.dto';

export class UpdatePublicacionUserDto extends PartialType(CreatePublicacionUserDto) {}
