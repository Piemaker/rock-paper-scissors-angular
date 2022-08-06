import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './features/game-board/game-board.component';
import { ScoreComponent } from './features/gameItems/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
