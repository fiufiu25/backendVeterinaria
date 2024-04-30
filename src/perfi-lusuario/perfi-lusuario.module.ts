import { Module } from '@nestjs/common';
import { PerfiLusuarioService } from './perfi-lusuario.service';
import { PerfiLusuarioController } from './perfi-lusuario.controller';

@Module({
  controllers: [PerfiLusuarioController],
  providers: [PerfiLusuarioService],
})
export class PerfiLusuarioModule {}
