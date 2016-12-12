/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegionRequestService } from './region-request.service';

describe('RegionRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionRequestService]
    });
  });

  it('should ...', inject([RegionRequestService], (service: RegionRequestService) => {
    expect(service).toBeTruthy();
  }));
});
