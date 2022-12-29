import { Component } from '@angular/core';
import { InterfaceService } from '../../services/interface.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Task-Manager";
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private interfaceService: InterfaceService){
    this.subscription = this.interfaceService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  toggleAddTask(){
    this.interfaceService.toggleAddTask();
  }
}
