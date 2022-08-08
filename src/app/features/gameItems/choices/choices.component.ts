import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output()
  chooseOption = new EventEmitter();
  @Input()
  xl: boolean  = false;
  constructor() {}

  handleClick(value: string) {
    this.chooseOption.emit(value);
  }
  ngOnInit(): void {}
}
