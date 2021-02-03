import { Module } from '@nestjs/common';
import { ToDoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [ToDoController],
  providers: [TodoService],
})
export class TodoModule {}
