/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {Md5Service} from "../../services/md5/md5.service";
import {UrlServiceService} from "../../services/urlService/url-service.service";

describe('Component: Home', () => {
  it('should create an instance', inject([Md5Service, UrlServiceService], (md5Service, urlServiceService) => {
    let component = new HomeComponent(md5Service, urlServiceService);
    expect(component).toBeTruthy();
  }));
});
