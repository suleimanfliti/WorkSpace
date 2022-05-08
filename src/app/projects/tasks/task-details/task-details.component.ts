import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  checked: boolean =true;

  constructor() { }

  ngOnInit(): void {
  }

  taskdetails= [
   
    {
      title: ' Authentication Views Design',
       description: "Irish skinny, grinder affogato,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias necessitatibus hic. Voluptatibus, nobis impedit dolor sint nemo illum omnis quo in consequatur doloremque necessitatibus laudantium eum, cum a cumque.Irish skinny, grinder affogato,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias necessitatibus hic. Voluptatibus, nobis impedit dolor sint nemo illum omnis quo in consequatur doloremque necessitatibus laudantium eum, cum a cumque.Irish skinny, grinder affogato,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias necessitatibus hic. Voluptatibus, nobis impedit dolor sint nemo illum omnis quo in consequatur doloremque necessitatibus laudantium eum, cum a cumque.Irish skinny, grinder affogato,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias necessitatibus hic. Voluptatibus, nobis impedit dolor sint nemo illum omnis quo in consequatur doloremque necessitatibus laudantium eum, cum a cumque.Irish skinny, grinder affogato,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias necessitatibus hic. Voluptatibus, nobis impedit dolor sint nemo illum omnis quo in consequatur doloremque necessitatibus laudantium eum, cum a cumque.    " , 
       skill:"Angular",
       start_at:"",
       end_at:"",
       deadline:"",
       hours:"2h-4h",
       actual_hours:"",
       status: "in progress" ,
    },
 



];


}
