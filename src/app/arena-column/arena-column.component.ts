import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arena-column',
  templateUrl: './arena-column.component.html',
  styleUrls: ['./arena-column.component.scss']
})
export class ArenaColumnComponent implements OnInit {
  playing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
