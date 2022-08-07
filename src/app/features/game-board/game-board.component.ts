import { Choices } from './ChoicesInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  choices: Choices[] = [
    {
      name: 'rock',
      img: '../../../assets/images/icon-rock.svg',
    },
    {
      name: 'paper',
      img: '../../../assets/images/icon-paper.svg',
    },
    {
      name: 'scissor',
      img: '../../../assets/images/icon-scissors.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void { }
  
  toggleModal() {
    
  }
}
