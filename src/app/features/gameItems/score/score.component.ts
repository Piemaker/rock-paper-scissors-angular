import { BoardServicesService } from './../../../services/board-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  score: number = 0;

  constructor(private boardService: BoardServicesService) {
    // you have to be subscribed to ensure that the score get updated
    // ngOnInit will only initialize the score probably but won't run again
    this.boardService.scoreChange.subscribe((value) => {
      this.score = value;
    });
  }

  ngOnInit(): void {
    // this has to be added because the service isn't initialized yet
    let score = localStorage.getItem('score');
    score ? (score = score) : (score = '0');
    this.score = parseInt(score);
  }
}
