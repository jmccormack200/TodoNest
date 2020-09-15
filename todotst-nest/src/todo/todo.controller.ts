import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {Todo} from "./todo.entity";
import {CreateTodoDto} from "./dto/CreateTodoDto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('todos')
@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {
    }

    @Get()
    @ApiResponse({
      status: 200,
      description: "A list of all todos in the system",
      type: Todo
    })
    findAll(): Promise<Todo[]> {
        return this.todoService.getAllTodos()
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todoService.createTodo(createTodoDto);
    }

    @ApiResponse({
        status: 200,
        description: "Todo successfully removed",
    })
    @ApiResponse({
        status: 404,
        description: "Todo with a given ID not found"
    })
    @Delete("/:id")
    deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.todoService.deleteTodo(id);
    }
}
