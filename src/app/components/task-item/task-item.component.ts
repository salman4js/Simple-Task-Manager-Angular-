import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task;
  @Output() onDeleteTask = new EventEmitter();
  faTimes = faTimes;
  @Output() onToggleReminder = new EventEmitter();
  

  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any){
    this.onToggleReminder.emit(task);
  }

}
