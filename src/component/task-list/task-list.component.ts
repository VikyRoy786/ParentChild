import { Component } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TasksComponent, FormsModule,AddTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
taskList = [{id : 1, Desc: "Coming to office", Priority: 2, status : "Completed"},
             {id : 2, Desc: "Learning Angular", Priority: 1, status : "InProgress"} ,
             {id : 3, Desc: "Working", Priority: 1, status : "Pending"},
             {id : 4, Desc: "Going GYM", Priority: 1, status : "Pending"}
]  

jadoo(n1 : number) : void{
  this.taskList=this.taskList.filter((task)=>task.id!==n1)
}
AddList(arr:any): void{
  this.taskList.push(arr);
}
listfilter(status : string): void {
  this.taskList = this.taskList.filter((fill)=>fill.status == status)
}



}
