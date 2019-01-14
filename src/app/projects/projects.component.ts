import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects={};

  constructor(private config:ConfigService) {
    this.projects= this.config.getConfig().projects;
   }

  ngOnInit() {
  }

}
