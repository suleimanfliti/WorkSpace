import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dates',
  templateUrl: './project-dates.component.html',
  styleUrls: ['./project-dates.component.css']
})
export class ProjectDatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  dates= [
    {
      start_date: "10 Feb 2019",
       valid_to: "1 May 2019",
       estimated_date: "10 July 2018",
       actual_date:"15 Oct 2019"        
    },
];

}
