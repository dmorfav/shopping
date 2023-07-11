import { TestBed } from '@angular/core/testing';

import { WorkerCommunicationService } from './worker-communication.service';

describe('WorkerCommunicationService', () => {
  let service: WorkerCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
