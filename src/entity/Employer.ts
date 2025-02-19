import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./Users";

@Entity()
export class Employer extends BaseEntity {
    @PrimaryColumn()
    userId: number;

    @Column({ nullable: true })
    taxCode: string

    @Column({ nullable: true })
    companyName: string

    @Column({ nullable: true })
    companyLocation: string

    @Column({ nullable: true })
    careerField: string

    @OneToOne(() => User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({
        name: 'userId',
        referencedColumnName: 'userId'
    })
    user: User
}