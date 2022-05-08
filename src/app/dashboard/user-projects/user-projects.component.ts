import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  projectList = [
    {
      project: 'Mind Cog App',
      avatar: 'assets/images/others/thumb-1.jpg',
      status: 'Ready',
      tasks: '31',
      progress: 100,
    },
    {
      project: 'Mill Estate',
      avatar: 'assets/images/others/thumb-2.jpg',
      status: 'In Progress',
      tasks: '56',
      progress: 76,
    },
    {
      project: 'Eastern Sack',
      avatar: 'assets/images/others/thumb-3.jpg',
      status: 'In Progress',
      tasks: '21',
      progress: 87,
    },
    {
      project: 'Fortier Studio',
      avatar: 'assets/images/others/thumb-5.jpg',
      status: 'In Progress',
      tasks: '18',
      progress: 68,
    },
    {
      project: 'Indi Web',
      avatar: 'assets/images/others/thumb-6.jpg',
      status: 'Behind',
      tasks: '165',
      progress: 28,
    },
  ];
}
