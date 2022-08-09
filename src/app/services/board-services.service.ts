import { Choices } from './../features/game-board/ChoicesInterface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardServicesService {
  userChoice: string = '';
  userChoiceChange: Subject<string> = new Subject<string>();

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

  setUserChoice(choice: string) {
    this.userChoiceChange.next(choice);
  }

  constructor() {
    this.userChoiceChange.subscribe((value) => {
      this.userChoice = value;
    });
  }
}
