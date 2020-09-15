import {EntityRepository, Repository} from "typeorm/index";
import {Todo} from "./todo.entity";
import {CreateTodoDto} from "./dto/CreateTodoDto";
import {TodoStatus} from "./todo-status.model";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {

    exampleFunction() {
        console.log("This was called fine");
    }

    async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
        const { title, description } = createTodoDto;

        const todo = new Todo();
        todo.title = title;
        todo.description = description;
        todo.status = TodoStatus.OPEN;
        await todo.save()

        return todo;
    }
}