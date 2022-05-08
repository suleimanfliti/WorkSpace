import { Component, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProjectList } from '../../interfaces/project-list.type';
import { Project } from '../../interfaces/project.type';
import { AppsService } from '../../services/apps.service';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectsListComponent {
  view: string = 'cardView';
  newProject: boolean = false;
  projectListRaw: ProjectList[];

  @Input() projects: ProjectList[];
  searchInput: string;

  constructor(
    private projectListSvc: AppsService,
    private modalService: NzModalService,
    private tablesvc: TableService
  ) {}

  ngOnInit(): void {
    this.projectListSvc.getProjectListJson().subscribe((data) => {
      this.projects = data;
      this.projectListRaw = data;
    });
    // if (this.projects[0].id === ) {
    //   get data from api myProject admin and general project admin
    //   this.ProjectService.getProjectDeveloper().subscribe((resData)={
    //   })
    //   console.log('my');
    // } else if (this.generalProjects) {
    //   console.log('general');
    // }
  }

  search() {
    const data = this.projectListRaw;
    console.log(data);
    this.projects = this.tablesvc.search(this.searchInput, data);
  }
}
