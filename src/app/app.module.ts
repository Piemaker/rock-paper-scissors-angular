import { GameBoardModule } from './features/game-board/game-board.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './features/game-board/game-board.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    GameBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
