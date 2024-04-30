import { Animale } from "src/animales/entities/animale.entity";
import { Column, Entity, OneToMany } from "typeorm";
@Entity()
export class Categoria {
 @Column({primary:true,generated:true})
 id:number;
 @Column({unique:true})
 nombre:string;
 @OneToMany(()=>Animale,(animale)=>animale.categoria)
  animales:Animale[]
}
