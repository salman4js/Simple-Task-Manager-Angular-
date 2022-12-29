import { Component, Output, EventEmitter } from '@angular/core';
import { InterfaceService } from '../../services/interface.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  @Output() onAddTask = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription : Subscription;

  constructor(private interfaceService: InterfaceService){
    this.subscription = this.interfaceService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a task!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder : this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text= "";
    this.day = "";
    this.reminder = false;

  }
}
