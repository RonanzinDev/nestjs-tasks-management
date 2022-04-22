import { Task } from './task.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }
}
