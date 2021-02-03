import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todo: Todo[] = [];
  private id = 0;

  addTodo(title: string, description: string) {
    this.id += 1;
    const item = new Todo(this.id.toString(), title, description);
    this.todo.push(item);
    return this.id;
  }

  sendItems() {
    return [...this.todo];
  }
  getSingleItem(id: number) {
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].id === id.toString()) {
        return { ...this.todo[i] };
      }
    }
    throw new NotFoundException('Resource not found');
  }
  updateSingleItem(id: number, title: string, description: string) {
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].id === id.toString()) {
        if (title) {
          this.todo[i].title = title;
        }
        if (description) {
          this.todo[i].description = description;
        }
        return { message: 'updated successfully' };
      }
    }
    throw new NotFoundException('Resource not found');
  }

  deleteSingleItem(id: number) {
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].id === id.toString()) {
        this.todo.splice(i, 1);
        return { message: 'deletion successful' };
      }
    }
    throw new NotFoundException('Resource not found');
  }
}
