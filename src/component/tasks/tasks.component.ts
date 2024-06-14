import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input() taskitems : any;
@Output() vata = new EventEmitter(); 
onRemove(n1 : number) : void{
this.vata.emit(n1)
}

}

