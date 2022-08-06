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

  constructor() {
  }

  ngOnInit(): void {}
}
