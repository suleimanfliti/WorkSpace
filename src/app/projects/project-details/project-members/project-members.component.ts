import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.css']
})
export class ProjectMembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


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
    {
        name: 'Virgil Gonzales',
        avatar: 'assets/images/avatars/thumb-4.jpg'
    },
    {
        name: 'Riley Newman',
        avatar: 'assets/images/avatars/thumb-6.jpg'
    },
    {
        name: 'Pamela Wanda',
        avatar: 'assets/images/avatars/thumb-7.jpg'
    }
]

}
