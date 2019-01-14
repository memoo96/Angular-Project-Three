import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about={};

  constructor(private config:ConfigService) {
    this.about= this.config.getConfig().about;
   }

  ngOnInit() {
  }

}
