import { Component, OnInit } from '@angular/core';
import { Md5Service } from '../../services/md5/md5.service';
import {UrlServiceService} from "../../services/urlService/url-service.service";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [Md5Service, UrlServiceService]
})
export class HomeComponent implements OnInit {

  hash: string;
  hashInputStr: string;

  constructor(private md5Service: Md5Service, private urlService: UrlServiceService) { }

  ngOnInit() {
  }

  redirectToFlickr() {
    var url = 'http://flickr.com/services/auth/?api_key=' + this.urlService.getApiKey() + '&perms=read&api_sig=' + this.urlService
        .getSignature('api_key' + this.urlService.getApiKey() + 'permsread');
    window.location.href = url;
  }
}
