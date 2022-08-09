import { BoardServicesService } from './../../services/board-services.service';
import { Choices } from './ChoicesInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  isShowModal: boolean = false;
  userChoice: string = '';
  choices: Choices[] = [];
  //* Just assigning the service value to the local state doesn't trigger a trigger a rerender
  constructor(private boardService: BoardServicesService) {
    this.boardService.userChoiceChange.subscribe((value) => {
      this.userChoice = value;
    });
  }

  ngOnInit(): void {
    this.choices = this.boardService.choices;
  }

  closeModal(): void {
    this.isShowModal = false;
  }
  openModal(): void {
    this.isShowModal = true;
  }
}
