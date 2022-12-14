import { Choices } from './../../features/game-board/ChoicesInterface';
import { BoardServicesService } from './../../services/board-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-board',
  templateUrl: './result-board.component.html',
  styleUrls: ['./result-board.component.scss'],
})
export class ResultBoardComponent implements OnInit {
  winner: string = '';
  userChoice: string = '';
  userChoiceObj: Choices = {
    name: '',
    img: '../../../assets/images/question-mark.png',
  };
  computerChoiceObj: Choices = {
    name: '',
    img: '../../../assets/images/question-mark.png',
  };
  choices: Choices[] = [];

  constructor(private boardService: BoardServicesService) {
    this.boardService.userChoiceChange.subscribe((value) => {
      this.userChoice = value;
    });
  }
  onClick(): void {
    this.boardService.setUserChoice('');
  }
  ngOnInit(): void {
    this.choices = this.boardService.choices;
    this.userChoice = this.boardService.userChoice;
    this.userChoiceObj = this.choices.filter(
      (x) => x.name === this.userChoice
    )[0];
    // stall computer choice
    setTimeout(() => {
      let cpuChoice = this.boardService.getCPUChoice();
      this.computerChoiceObj = this.choices.filter(
        (x) => x.name === cpuChoice
      )[0];
      this.winner = this.boardService.getWinnerState(
        this.userChoice,
        cpuChoice
      );
      this.boardService.handleUserScore(this.winner);
    }, 1500);
    // get winner
  }
}
