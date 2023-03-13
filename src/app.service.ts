import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  todos = [
    {
      name: 'lol',
    },
    {
      name: 'asd',
    }
  ];

  getTodos() {
    return this.todos;
  }
  getOneTodo(name: string) {
    return this.todos.filter(x => x.name == name);
  }
  createTodo(body: { name: string }) {
    this.todos.push(body)
  }
  deleteTodo(name: string) {
    const deletedIndex = this.todos.findIndex(obj => obj.name == name);
    this.todos.splice(deletedIndex, 1);
    console.log(this.todos);
  }
  updateTodo(name: string, newName: string) {
    this.todos.forEach(e => {
      if (e.name === name) {
        e.name = newName
      }
    })
    console.log(this.todos)
  }
}
