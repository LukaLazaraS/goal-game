import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppService } from '../app.service';
import { ArenaColumnComponent } from '../arena-column/arena-column.component';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit, OnDestroy {
  columns: any[] = new Array(4);
  currentColumn: number = -1;
  private subscribtion!: Subscription; // to get when to start and end game

  constructor(private service: AppService) { }

  ngOnInit(): void {
    // to start or stop game
    this.subscribtion = this.service.betStart$.subscribe(data => {
      if (data == "start") {
        this.currentColumn = 0;
      } else {
        location.reload();
      }
    })
  }

  onDone(e: string) {
    if (e === "Defeat") {
      this.currentColumn = -1;
      this.service.betAmount$.next("Defeat");
    } else if (this.currentColumn == this.columns.length - 1) {
      this.currentColumn = -1;
      this.service.betAmount$.next(this.currentColumn + 1);
    } else {
      this.currentColumn++;
      this.service.betAmount$.next(this.currentColumn);
    }
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
