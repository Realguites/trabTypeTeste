import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Usuario {

    constructor(nome: string, email: string, idade: number){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    idade: number;

}
