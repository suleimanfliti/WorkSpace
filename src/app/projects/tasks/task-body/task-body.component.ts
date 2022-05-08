import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-body',
  templateUrl: './task-body.component.html',
  styleUrls: ['./task-body.component.css']
})
export class TaskBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    
isShown: boolean = false ;

toggleShow() {

this.isShown = ! this.isShown;

}


taskbody= [
   
  {
    title: ' Authentication Views Design',
     deadline:"11 Nov 2021",
     hours:"2h-4h",
     status:"In progress"
  },
];


memberList = [
  {
      name: 'Erin Gonzales',
      avatar: 'assets/images/avatars/thumb-1.jpg'
  },
  {
      name: 'Darryl Day',
      avatar: 'assets/images/avatars/thumb-2.jpg'
  },
  {
      name: 'Marshall Nichols',
      avatar: 'assets/images/avatars/thumb-3.jpg'
  },

];

}

