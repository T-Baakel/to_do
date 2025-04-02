import { Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskManagerService } from '../../services/task-manager.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  private formBuilder = inject(FormBuilder);
  private taskManager = inject(TaskManagerService);


  @Input() task: Task | undefined;
  @Output() editDone = new EventEmitter<null>();

  taskForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: [false, Validators.required],
  });

  edit: boolean = false;

  ngOnInit() {
    if (this.task) {
      this.taskForm.controls['title'].setValue(this.task.title);
      this.taskForm.controls['description'].setValue(this.task.description);
      this.taskForm.controls['completed'].setValue(this.task.completed);

      this.edit = true;
    }
  }

  addTask() {
    this.taskManager.addTask({
      id: 0,
      title: <string>this.taskForm.controls["title"].value,
      description: <string>this.taskForm.controls["description"].value,
      completed: <boolean>this.taskForm.controls["completed"].value,
    });
    this.taskForm.reset();
    this.taskForm.controls['completed'].setValue(false);
  }

  editTask() {
    if (this.task) {
      this.taskManager.editTask({
        id: this.task.id,
        title: <string>this.taskForm.controls["title"].value,
        description: <string>this.taskForm.controls["description"].value,
        completed: <boolean>this.taskForm.controls["completed"].value,
      });
      this.editDone.emit();
    }
  }
}
