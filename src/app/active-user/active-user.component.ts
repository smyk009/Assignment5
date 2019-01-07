import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

  users: string[];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.users = this.userservice.activeUser;
  }

  onSetToInactive(id:number){
    this.userservice.setToInactive(id);
  }

}
