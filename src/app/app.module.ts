import { GameBoardModule } from './features/game-board/game-board.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './features/game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
  ],
  imports: [
    BrowserModule,
    GameBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
