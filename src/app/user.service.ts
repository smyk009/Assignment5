import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService{
  activeUser = ['Sam', 'Mat'];
  inactiveUser = ['Tom', 'Jerry'];

  constructor(private counterService: CounterService){}

    setToActive(id:number){
        this.activeUser.push(this.inactiveUser[id]);
        this.inactiveUser.splice(id, 1);
        this.counterService.setActiveCount();
    }

    setToInactive(id: number){
        this.inactiveUser.push(this.activeUser[id]);
        this.activeUser.splice(id, 1);
        this.counterService.setInactiveCount();
    }
}