import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  taskListIndex: number = 0;


  taskListToday = [
    {
      title: 'Define users and workflow',
      desc: 'A cheeseburger is more than sandwich',
      checked: false,
    },
    {
      title: 'Schedule jobs',
      desc: "I'm gonna build me an airport",
      checked: true,
    },
    {
      title: 'Extend the data model',
      desc: 'Let us wax poetic about cheeseburger.',
      checked: true,
    },
    {
      title: 'Change interface',
      desc: 'Efficiently unleash cross-media information',
      checked: false,
    },
    {
      title: 'Create databases',
      desc: "Here's the story of a man named Brady",
      checked: false,
    },
  ];

  taskListWeek = [
    {
      title: 'Verify connectivity',
      desc: "Bugger bag egg's old boy willy jolly",
      checked: false,
    },
    {
      title: 'Order console machines',
      desc: 'Value proposition alpha crowdsource',
      checked: false,
    },
    {
      title: 'Customize Template',
      desc: 'Do you see any Teletubbies in here',
      checked: true,
    },
    {
      title: 'Batch schedule',
      desc: 'Trillion a very small stage in a vast',
      checked: true,
    },
    {
      title: 'Prepare implementation',
      desc: 'Drop in axle roll-in rail slide',
      checked: true,
    },
  ];

  taskListMonth = [
    {
      title: 'Create user groups',
      desc: 'Nipperkin run a rig ballast chase',
      checked: false,
    },
    {
      title: 'Design Wireframe',
      desc: 'Value proposition alpha crowdsource',
      checked: true,
    },
    {
      title: 'Project Launch',
      desc: "I'll be sure to note that",
      checked: false,
    },
    {
      title: 'Management meeting',
      desc: 'Hand-crafted exclusive finest',
      checked: false,
    },
    {
      title: 'Extend data model',
      desc: 'European minnow priapumfish mosshead',
      checked: true,
    },
  ];


}
