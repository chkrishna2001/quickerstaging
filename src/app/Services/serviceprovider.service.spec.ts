/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceproviderService } from './serviceprovider.service';

describe('Service: Serviceprovider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceproviderService]
    });
  });

  it('should ...', inject([ServiceproviderService], (service: ServiceproviderService) => {
    expect(service).toBeTruthy();
  }));
});
