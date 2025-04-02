import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskManagerService } from '../../services/task-manager.service';

@Component({
  selector: 'app-search-task',
  imports: [ReactiveFormsModule],
  templateUrl: './search-task.component.html',
  styleUrl: './search-task.component.scss'
})
export class SearchTaskComponent {

  search = new FormControl('');
  private taskManager = inject(TaskManagerService);



  ngOnInit() {
    this.search.valueChanges.subscribe((value) => {
      this.taskManager.searchTask(value);
    });
  }
}
