import { TestBed } from '@angular/core/testing';

import { SwfServiceService } from './swf-service.service';

describe('SwfServiceService', () => {
  let service: SwfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
