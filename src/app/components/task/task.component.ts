import { Component, inject, Input } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskManagerService } from '../../services/task-manager.service';
import { NgClass } from '@angular/common';
import { CreateTaskComponent } from "../create-task/create-task.component";

@Component({
  selector: 'app-task',
  imports: [NgClass, CreateTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;

  edit: boolean = false;

  private taskManager = inject(TaskManagerService);

  deleteTask() {
    this.taskManager.removeTask(this.task.id);
  }

  editTask() {
    this.edit = true;
  }

  completeTask() {
    this.taskManager.completeTask(this.task.id)
  }
}
