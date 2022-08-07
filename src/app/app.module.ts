import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameBoardModule } from './features/game-board/game-board.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GameBoardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
