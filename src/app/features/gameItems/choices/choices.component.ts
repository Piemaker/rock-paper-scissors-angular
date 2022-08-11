import { BoardServicesService } from './../../../services/board-services.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent implements OnInit {
  @Input()
  name: string = '';
  @Input()
  img: string = '';
  @Input()
  absPos: boolean = false;
  @Input()
  xl: boolean = false;
  @Input()
  isDisabled: boolean = false;
  @Input()
  isRipple: boolean = false;
  //* Add private to be able to access the service
  constructor(private boardService: BoardServicesService) {}
  
  handleClick(value: string) {
    this.boardService.setUserChoice(value);
  }
  ngOnInit(): void {
    console.log("🚀 ~ file: choices.component.ts ~ line 22 ~ ChoicesComponent ~ isRipple", this.isRipple)

  }
}
