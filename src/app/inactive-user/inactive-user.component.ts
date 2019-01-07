import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  users: string[]
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.users = this.userservice.inactiveUser;
  }

  onSetToActive(id: number){
    this.userservice.setToActive(id);
  }

}
