import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { observable } from 'rxjs';
//import { TASK } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task: Task){
    task.reminder = ! task.reminder;
    this.taskService.updateTRaskReminder(task).subscribe();
    
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task) );
    
  }
}
