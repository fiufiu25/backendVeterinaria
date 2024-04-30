import { Comentario } from "src/comentarios/entities/comentario.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class ComentarioPublicacion {
    @Column({primary:true,generated:true})
id:number;
@Column()
comentario:string;
@Column({type:"timestamp"})
date:Date;
@ManyToOne(()=>Comentario,comentario=>comentario.id,{eager:true,})
comentarios: Comentario;
@ManyToOne(()=>User,user=>user.id,{eager:true,})
user: User;
}



