import { GameBoardComponent } from './game-board.component';
import { ModalComponent } from './../../components/modal/modal.component';
import { ChoicesComponent } from './../gameItems/choices/choices.component';
import { ScoreComponent } from './../gameItems/score/score.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ScoreComponent,
    ChoicesComponent,
    ModalComponent,
    GameBoardComponent,
  ],
  imports: [CommonModule],
  exports: [GameBoardComponent],
})
export class GameBoardModule {}
