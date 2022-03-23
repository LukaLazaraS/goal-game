import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-arena-column',
  templateUrl: './arena-column.component.html',
  styleUrls: ['./arena-column.component.scss']
})
export class ArenaColumnComponent implements OnInit {
  @Input() played: boolean = false;
  @Input() playing: boolean = false;
  @Input() columnIndex: number = 0;
  @Output() done = new EventEmitter<string>();

  boxs: any[] = new Array(3);

  bombIndex!: number;
  BallIndex!: number;

  betOnColumn: number = 1.25;

  constructor() { }

  ngOnInit(): void {

  }

  onClickBox(i: number) {
    if (this.playing) {
      let bombIndex = Math.floor(Math.random() * this.boxs.length)
      if (i == bombIndex) {
        this.done.emit("Defeat");
        this.BallIndex = -1;
      } else {
        this.done.emit("Victory");
        this.BallIndex = i;
      }
      this.bombIndex = bombIndex;
    }
  }
}
