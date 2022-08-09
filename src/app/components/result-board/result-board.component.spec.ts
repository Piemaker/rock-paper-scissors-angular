import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBoardComponent } from './result-board.component';

describe('ResultBoardComponent', () => {
  let component: ResultBoardComponent;
  let fixture: ComponentFixture<ResultBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
