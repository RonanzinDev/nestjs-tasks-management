import { CreateTaskDTO } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDTO): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;
  }

  getTaskById(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    return task;
  }
}
