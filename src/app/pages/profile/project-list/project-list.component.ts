import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.type';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UserSerivce } from 'src/app/shared/services/user.service';

@Component({
  selector: 'me-projects-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListMeComponent implements OnInit {
  isLoaded: boolean = false;
  error: string;
  projects: Project[];
  i: number = 2;
  constructor(private projectService: ProjectService ,private userService: UserSerivce) {}
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    if (!this.projects[0]) {
      this.isLoaded = true;
      this.projectService.getProjectsApi().subscribe(
        (resData) => {
          this.isLoaded = false;
          this.projects = resData;
        },
        (error) => {
          this.isLoaded = false;
          this.error = error;
        }
      );
    }
    this.userService.getProjectsList().subscribe((projRes) => {
      /////////////////
    })
  }
  projectList = [];
    }

