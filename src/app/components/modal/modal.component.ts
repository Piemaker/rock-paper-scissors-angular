import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output()
    closeModal = new EventEmitter
  constructor() {}

  onCloseModal() {
    this.closeModal.emit();
  }
  ngOnInit(): void {}
}
