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
  playing: boolean = false;
  lost: boolean = false;
  betValue: number = 0.10;
  outputBetValue: number = 0.10;
  betColumn: any = 1;

  ngOnInit(): void {
    this.service.betAmount$.subscribe(data => {
      this.outputBetValue = this.betValue * this.betColumn * 1.25;
      this.betColumn++;
      if (data === "Defeat") {
        this.lost = true;
      }
    })
  }

  onClickBet(e: any) {
    if (this.lastBet == "start") {
      this.lastBet = "stop";
      this.service.betStart$.next("start");
      this.betValue = e.value;
      this.outputBetValue = e.value;
      this.playing = true;
    }
    else {
      this.lastBet = "start";
      this.service.betStart$.next("stop");
      this.playing = false;
    }
  }

}
