/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthserviceService } from './healthservice.service';

describe('Service: Healthservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthserviceService]
    });
  });

  it('should ...', inject([HealthserviceService], (service: HealthserviceService) => {
    expect(service).toBeTruthy();
  }));
});
