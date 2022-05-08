import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  projectList = [
    {
      title: 'Mind Cog App',
      describtion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab cumque quod delectus molestiae perspiciatis quibusdam alias enim natus voluptatibus expedita consectetur id, sint deserunt inventore maiores facilis necessitatibus sed?',
      start_date:'',
      valid_to:"",
      estimated_date:'',
      actual_date:'',
      color:'#868686',
      skills:'',
      datafile_type:'',
      datafile_name:'',
      avatar: 'assets/images/others/thumb-1.jpg',
      status: 'In Progress',
      tasks: '',
      progress: 100,
    },
    
  ];
}
