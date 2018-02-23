import { TestBed, inject } from '@angular/core/testing';

import { InMemoryTaskService } from './in-memory-task.service';

describe('InMemoryTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryTaskService]
    });
  });

  it('should be created', inject([InMemoryTaskService], (service: InMemoryTaskService) => {
    expect(service).toBeTruthy();
  }));
});
