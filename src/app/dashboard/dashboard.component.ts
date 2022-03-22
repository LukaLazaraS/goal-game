import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AppService) { }
  lastBet: string = "start"

  ngOnInit(): void {
  }

  onClickBet() {
    if (this.lastBet == "start") {
      this.lastBet = "stop";
      this.service.betStart$.next("start");
    }
    else {
      this.lastBet = "start";
      this.service.betStart$.next("stop");
    }
  }

}
