import { Animale } from "src/animales/entities/animale.entity";
import { Comentario } from "src/comentarios/entities/comentario.entity";
import { PublicacionUser } from "src/publicacion-users/entities/publicacion-user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity()

export class Imagene {
    @Column({primary:true,generated:true})
    id:number;
    @Column()
    url:string;
    @ManyToOne(()=>Comentario,comentario=>comentario.id,{eager:true, cascade: true})
    comentario:Comentario
    @ManyToOne(()=>PublicacionUser,publicacionUer=>publicacionUer.id,{eager:true, cascade: true})
    publicacionUser:PublicacionUser
     
}
 