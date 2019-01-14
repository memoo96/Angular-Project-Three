import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery={};

  constructor(private config:ConfigService) {
    this.gallery= this.config.getConfig().gallery;
   }

  ngOnInit() {
  }

}
