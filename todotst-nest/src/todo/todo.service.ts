import {Injectable, NotFoundException} from '@nestjs/common';
import {Todo} from "./todo.entity";
import {CreateTodoDto} from "./dto/CreateTodoDto";
import {InjectRepository} from "@nestjs/typeorm";
import {TodoRepository} from "./todo.repository";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoRepository)
        private todoRepository: TodoRepository
    ) {}

    async getAllTodos(): Promise<Todo[]> {
        this.todoRepository.exampleFunction()
        return this.todoRepository.find();
    }

    async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todoRepository.createTodo(createTodoDto)
    }

    async deleteTodo(id: number): Promise<void> {
        const result = await this.todoRepository.delete(id);

        if (result.affected === 0){
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }
}
