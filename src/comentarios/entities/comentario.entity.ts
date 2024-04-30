import { ComentarioPublicacion } from "src/comentario-publicacion/entities/comentario-publicacion.entity";
import { Imagene } from "src/imagenes/entities/imagene.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Comentario {
    @Column({primary:true,generated:true})
    id:number;
    @Column()
    comentario:string
    
    @Column({ type: "timestamp" })
    date:Date;
    @ManyToOne(() => User, user => user.id,{eager:true,})
    user: User; 
    @OneToMany(() => Imagene, (imagene) => imagene.comentario)
    imagene: Imagene[];
    @OneToMany(()=>ComentarioPublicacion, comentarioPublicacion=>comentarioPublicacion.comentarios)
    comentarioPublicaciones:ComentarioPublicacion[]
}
  