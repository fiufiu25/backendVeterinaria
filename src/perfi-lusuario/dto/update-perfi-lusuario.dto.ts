import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfiLusuarioDto } from './create-perfi-lusuario.dto';

export class UpdatePerfiLusuarioDto extends PartialType(CreatePerfiLusuarioDto) {}
