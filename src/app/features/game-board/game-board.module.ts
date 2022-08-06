import { ChoicesComponent } from './../gameItems/choices/choices.component';
import { ScoreComponent } from './../gameItems/score/score.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ScoreComponent,ChoicesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ScoreComponent,ChoicesComponent
  ]
})
export class GameBoardModule { }
