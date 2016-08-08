/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { Md5Service } from './md5.service';

describe('Service: Md5', () => {
  beforeEach(() => {
    addProviders([Md5Service]);
  });

  it('should ...',
    inject([Md5Service],
      (service: Md5Service) => {
        expect(service).toBeTruthy();
      }));
});
