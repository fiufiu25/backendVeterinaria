import { Animale } from "src/animales/entities/animale.entity";
import { Role } from "src/auth/enums/rol.enums";
import { ComentarioPublicacion } from "src/comentario-publicacion/entities/comentario-publicacion.entity";
import { Comentario } from "src/comentarios/entities/comentario.entity";
import { PublicacionUser } from "src/publicacion-users/entities/publicacion-user.entity";

import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class User {
  @Column ({primary:true,generated:true})
  id:number;
  @Column()
  nombre:string;
  @Column({unique:true,nullable:false})
  email:string;
  @Column({unique:true,nullable:false})
  password:string;
  @Column ({type:"enum", default:Role.USER,enum:Role})
  rol:Role
  
  @OneToMany(() => Comentario, (comentario) => comentario.user)
  comentarios: Comentario[];
  @OneToMany(() => PublicacionUser, (publicacionUer) => publicacionUer.user)
  publicacionUer: PublicacionUser[];

  @OneToMany(() => Animale, (animale) => animale.user)
  animales: Animale[];
  @OneToMany(() => ComentarioPublicacion, (comentarioPublicacion) => comentarioPublicacion.user)
  ancomentarioPublicaciones: Animale[];

} 




