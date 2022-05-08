import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-skills',
  templateUrl: './project-skills.component.html',
  styleUrls: ['./project-skills.component.css']
})
export class ProjectSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  skillListData = ['php', 'laravel', 'Photoshop', 'Angular', 'Web Design', 'Mobile App Design', 'User Interface']


  


}
