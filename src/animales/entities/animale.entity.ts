import { Categoria } from "src/categoria/entities/categoria.entity";

import { PerfilAnimal } from "src/perfil-animal/entities/perfil-animal.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
 
@Entity()
export class Animale {
    @Column({primary:true,generated:true})
     id:number;
     @Column()
     nombre:string;
     @Column()
     edad:string;
     @Column()
     descripcion:string
     @Column()
     genero:string
     @Column({ type:"date" })
     fecha:Date;
     @ManyToOne(()=>User,(user)=>user.id,{eager:true})
     user:User
     @ManyToOne(()=>Categoria,(categoria)=>categoria.id,{eager:true})
     categoria:Categoria;
     @OneToMany(()=>PerfilAnimal,(imagene)=>imagene.animale)
     perfilAnimal:PerfilAnimal[]

}  
