import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtGuard } from '../user/guard';
import {Task} from './task.model'

@UseGuards(JwtGuard)
@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create-task')
  async createTask(@Body('name') name: string) {
    const result = await this.taskService.createTask(name);
    return result;
  }

  @Get('list-tasks')
  async getAllTasks() {
      const tasks = await this.taskService.getAllTasks();
      return tasks;
  }

  @Post('delete-task')
  async deleteTasks(@Body('tasks') tasks: Task[]) {
      const res = await this.taskService.deleteTasks(tasks);
      return res;
  }
}
