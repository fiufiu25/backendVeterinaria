import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilAnimalDto } from './create-perfil-animal.dto';

export class UpdatePerfilAnimalDto extends PartialType(CreatePerfilAnimalDto) {}
