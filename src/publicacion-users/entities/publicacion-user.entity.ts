import { Imagene } from "src/imagenes/entities/imagene.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class PublicacionUser {
 @Column({primary:true,generated:true})   
 id:number
 @Column()
 comentario:string
 @Column({ type: 'date' })
    date:Date;
    @ManyToOne(() => User, user => user.id,{eager:true,})
    user: User;
    @OneToMany(() => Imagene, (imagene) => imagene.publicacionUser)
    imagenes: Imagene[];


}
