import { TestBed } from '@angular/core/testing';

import { SlowQueriesService } from './slow-queries.service';

describe('SlowQueriesService', () => {
  let service: SlowQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlowQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
