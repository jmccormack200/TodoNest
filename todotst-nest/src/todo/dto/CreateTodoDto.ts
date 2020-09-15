import {IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateTodoDto {
    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @ApiProperty({ example: "Get Milk", description: "The title of the todo"})
    readonly title: string;

    @IsNotEmpty()
    @MinLength(10)
    @IsString()
    @ApiProperty({ example: "Go to the store and get milk", description: "The body of the todo"})
    readonly description: string;
}