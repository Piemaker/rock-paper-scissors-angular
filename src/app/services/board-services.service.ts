import { Choices } from './../features/game-board/ChoicesInterface';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardServicesService implements OnInit {
  score: number = 0;
  scoreChange: Subject<number> = new Subject<number>();
  userChoice: string = '';
  userChoiceChange: Subject<string> = new Subject<string>();
  cpuOptions = ['rock', 'paper', 'scissors'];
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
      name: 'scissors',
      img: '../../../assets/images/icon-scissors.svg',
    },
  ];

  setUserChoice(choice: string) {
    this.userChoiceChange.next(choice);
  }

  getCPUChoice(): string {
    let index = Math.floor(Math.random() * this.cpuOptions.length);
    return this.cpuOptions[index];
  }

  getWinnerState(playerChoice: string, cpuChoice: string): string {
    if (playerChoice === 'rock' && cpuChoice === 'scissors') return 'You Win';
    if (playerChoice === 'paper' && cpuChoice === 'rock') return 'You Win';
    if (playerChoice === 'scissors' && cpuChoice === 'paper') return 'You Win';
    if (playerChoice === 'rock' && cpuChoice === 'rock') return 'Draw';
    if (playerChoice === 'paper' && cpuChoice === 'paper') return 'Draw';
    if (playerChoice === 'scissors' && cpuChoice === 'scissors') return 'Draw';
    return 'Computer Wins';
  }

  handleUserScore(winner: string) {
    if (winner === 'You Win') {
      let newScore = this.score + 1;
      this.scoreChange.next(newScore);
      localStorage.setItem('score', newScore.toString());
    }
  }

  constructor() {
    this.userChoiceChange.subscribe((value) => {
      this.userChoice = value;
    });
    // without this the value doesn't get updated past 1
    this.scoreChange.subscribe((value) => {
      this.score = value;
    });
    // this correctly initializes the value from the local storage
    let score = localStorage.getItem('score');
    score ? (score = score) : (score = '0');
    this.scoreChange.next(parseInt(score));
  }
  ngOnInit(): void {}
}
