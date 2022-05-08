import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  checked: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }



  Inprogress_panel = [
    {
      active: false,
      disabled: true,
      title: "In Progress",
      hours: "1h",
      status: 'In Progress',


    },

  ];

  Noprogress_panel = [
    {
      active: false,
      disabled: true,
      title: "Completed",
      hours: "1h",
      status: 'Completed',
      childPanel: [
        {
          active: false,
          title: 'sub-task',
        },

      ]

    },

  ];

  Completed_panel = [
    {
      active: false,
      disabled: true,
      title: "No progress",
      hours: "1h",
      status: 'Completed',
      childPanel: [
        {
          active: false,
          title: 'sub-task',
        },

      ]

    },

  ];



}
