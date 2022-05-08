import { Component, OnInit } from '@angular/core';
import { ProjectList } from 'src/app/shared/interfaces/project-list.type';
import { AppsService } from 'src/app/shared/services/apps.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectList[];
  general: boolean = true;
  projectListRaw: ProjectList[];
  searchInput: string;
  constructor(
    private projectListSvc: AppsService,
    private tablesvc: TableService,
    private ProjectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectListSvc.getProjectListJson().subscribe((data) => {
      this.projects = data;
      this.projectListRaw = data;
    });
  }
  search() {
    const data = this.projectListRaw;
    this.projects = this.tablesvc.search(this.searchInput, data);
  }
  onChange() {
    this.searchInput = '';
    this.general = !this.general;
    if (this.general) {
      this.projectListSvc.getProjectListJson().subscribe((data) => {
        this.projects = data;
        this.projectListRaw = data;
      });
    } else {
      console.log('here');
      this.projectListSvc.getProjectListJson().subscribe((data) => {
        this.projects = data;
        this.projectListRaw = data;
      });
    }
  }
}
