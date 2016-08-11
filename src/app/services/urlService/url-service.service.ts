import { Injectable } from '@angular/core';
import {Md5Service} from "../md5/md5.service";

@Injectable()
export class UrlServiceService {

  apiKey: string = "461b9cf8ed54f11eb14633e684814657";
  apiSecret: string = '7de64c46fe2eff60';

  constructor(private md5Service: Md5Service) { }

  getSignature(str: string) {
    return this.md5Service.createHash(this.apiSecret + str);
  }

  getApiKey() {
    return this.apiKey;
  }
}
