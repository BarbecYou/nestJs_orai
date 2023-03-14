import { BadRequestException, Body, Controller, Delete, Get, Header, Param, ParseIntPipe, Patch, Post, Query, Redirect, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/todos')
  getTodos() {
    const todos = this.appService.getTodos();
    return {
      todos: todos,
    }
  }

  @Get('todos/:name')
  @Render('todo')
  getOneTodo(@Param('name') name: string) {
    const todos = this.appService.getOneTodo(name);
    return {
      todo: todos[0]
    }
  }

  @Post('todos')
  @Redirect('/todos')
  addTodo(@Body() body) {
    return this.appService.createTodo(body);
  }

  @Post('todos/delete/:name')
  @Redirect('/todos')
  deleteTodo(@Param('name') name: string) {
    return this.appService.deleteTodo(name);
  }

  @Post('todos/update/:name')
  @Redirect('/todos')
  updateTodo(@Body('newName') newName: string, @Param('name') name: string) {
    return this.appService.updateTodo(name, newName);
  }
}
