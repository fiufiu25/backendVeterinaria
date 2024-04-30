import { PartialType } from '@nestjs/mapped-types';
import { CreateComentarioPublicacionDto } from './create-comentario-publicacion.dto';

export class UpdateComentarioPublicacionDto extends PartialType(CreateComentarioPublicacionDto) {}
