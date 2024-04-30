import { Animale } from "src/animales/entities/animale.entity";
import { Column, Entity, ManyToOne } from "typeorm";


@Entity()
export class PerfilAnimal {

    @Column({primary:true,generated:true})
    id:number;
    @Column()
    url:string;
    @ManyToOne(()=>Animale,animale=>animale.id,{eager:true})
    animale:Animale
}
