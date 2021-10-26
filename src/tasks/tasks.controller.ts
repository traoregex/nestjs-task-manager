import { ITask } from './task.model';
import { TasksService } from './tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): ITask[] {
    return this.tasksService.getAllTasks();
  }
}
