import {TodoStatus} from "./todo-status.model";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm/index";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: "Get Milk", description: "The title of the todo"})
    @Column()
    title: string;

    @ApiProperty({ example: "Go to the store to buy milk", description: "The body of the todo"})
    @Column()
    description: string;

    @Column()
    @ApiProperty({enum: TodoStatus})
    status: TodoStatus;
}