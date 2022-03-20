import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArenaComponent } from './arena/arena.component';
import { ArenaColumnComponent } from './arena-column/arena-column.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ArenaComponent,
    ArenaColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
