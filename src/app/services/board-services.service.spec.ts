import { TestBed } from '@angular/core/testing';

import { BoardServicesService } from './board-services.service';

describe('BoardServicesService', () => {
  let service: BoardServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
