import { Component, OnInit } from '@angular/core';
import { Md5Service } from '../../services/md5/md5.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [Md5Service]
})
export class HomeComponent implements OnInit {

  hash: string;

  constructor(private md5Service: Md5Service) { }

  ngOnInit() {
  }

  generateHash(str: string) {
    this.hash = this.md5Service.createHash(str);
  }
}
