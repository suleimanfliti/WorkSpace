import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-files',
  templateUrl: './project-files.component.html',
  styleUrls: ['./project-files.component.css']
})
export class ProjectFilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fileList = [
    {
        name: "Mockup.zip",
        size: "7 MB",
        type: "zip"        
    },
    {
        name: "Guideline.doc",
        size: "128 KB",
        type: "doc"        
    },
    {
        name: "Logo.png",
        size: "128 KB",
        type: "image"        
    }
];

}
