/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UrlServiceService } from './url-service.service';

describe('Service: UrlService', () => {
  beforeEach(() => {
    addProviders([UrlServiceService]);
  });

  it('should ...',
    inject([UrlServiceService],
      (service: UrlServiceService) => {
        expect(service).toBeTruthy();
      }));
});
