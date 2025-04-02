import { Component, inject } from '@angular/core';
import { TaskManagerService } from '../../services/task-manager.service';
import { CreateTaskComponent } from "../../components/create-task/create-task.component";
import { TaskComponent } from "../../components/task/task.component";
import { SearchTaskComponent } from "../../components/search-task/search-task.component";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-task-list',
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {

  taskManager = inject(TaskManagerService);

  addOpen = false;

  ngOnInit() {
    this.taskManager.init();
  }
}
