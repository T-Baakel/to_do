import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';



@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  data: Array<Task> = [];
  dataFiltered: Array<Task> = [];
  search: string = "";

  constructor() { }

  init() {
    const localData = localStorage.getItem('tasks');
    if (localData) {
      this.data = JSON.parse(localData);
    }
    this.dataFiltered = this.data;

  }

  searchTask(search: string | null) {
    if (search) {
      this.search = search;
      this.dataFiltered = this.data.filter((e) => e.title.indexOf(search) !== -1 || e.description.indexOf(search) !== -1);
    } else {
      this.dataFiltered = this.data;
    }
  }

  addTask(task: Task) {
    task.id = this.data.length
    this.data.push(task);
    this.updateTask();
  }

  editTask(task: Task) {
    const index = this.data.findIndex(x => x.id === task.id);
    this.data[index] = task;
    this.updateTask();
  }

  removeTask(id: number) {
    const index = this.data.findIndex(x => x.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].id = i;
    }
    this.updateTask();
  }

  completeTask(id: number) {
    this.data[id].completed = !this.data[id].completed;
    this.updateTask();
  }

  updateTask() {
    this.dataFiltered = this.data;
    localStorage.setItem('tasks', JSON.stringify(this.data));
    this.searchTask(this.search);
  }
}
