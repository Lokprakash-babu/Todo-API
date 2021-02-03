import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { title } from 'process';
import { TodoService } from './todo.service';

@Controller('todos')
export class ToDoController {
  constructor(private readonly ToDo: TodoService) {}

  @Post()
  postItem(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    const genId = this.ToDo.addTodo(title, description);
    return {
      id: genId,
    };
  }

  @Get()
  getItems() {
    return this.ToDo.sendItems();
  }

  @Get(':id')
  getSingleItem(@Param('id') id: number) {
    return this.ToDo.getSingleItem(id);
  }

  @Patch(':id')
  patchSingleItem(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('description') desc: string,
  ) {
    return this.ToDo.updateSingleItem(id, title, desc);
  }

  @Delete(':id')
  deleteSingleItem(@Param('id') id: number) {
    return this.ToDo.deleteSingleItem(id);
  }
}
