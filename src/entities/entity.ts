import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Medico {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public nome?: string;

    @Column()
    public especialidade?: string;

    @OneToMany(() => Consulta, consulta => consulta.medico)
    public consultas?: Consulta[];
}

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public nome?: string;

    @Column()
    public idade?: number;

    @Column()
    public sexo?: string;

    @Column()
    public telefone?: string;

    @OneToMany(() => Consulta, consulta => consulta.paciente)
    public consultas?: Consulta[];
}

@Entity()
export class Consulta {
    @PrimaryGeneratedColumn()
    public id?: number;

    @ManyToOne(() => Medico, medico => medico.consultas)
    public medico?: Medico;

    @ManyToOne(() => Paciente, paciente => paciente.consultas)
    public paciente?: Paciente;

    @Column()
    public data?: Date;

    @Column()
    public motivo?: string;
}
