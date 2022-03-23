import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  betStart$ = new Subject(); //to know when to start and end game
  betAmount$ = new Subject();

  constructor() { }
}
