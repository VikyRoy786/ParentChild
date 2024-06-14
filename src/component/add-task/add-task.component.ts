import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() add = new EventEmitter();
  addtask:any ={ id : '' ,Desc: '', Priority: '', status : ''}; 
  status = '';
  AddList():void{
     
    this.add.emit(this.addtask);
  this.addtask={}

  }
  FilterBy(): void{
    
  }
}
