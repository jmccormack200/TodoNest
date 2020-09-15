import { Module } from '@nestjs/common';
import {TodoService} from "./todo.service";
import {TodoController} from "./todo.controller";
import {TodoRepository} from "./todo.repository";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([TodoRepository]),
    ],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {}