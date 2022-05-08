import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { AppsService } from '../shared/services/apps.service';
import { TableService } from '../shared/services/table.service';
import { NzCommentModule } from 'ng-zorro-antd/comment';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputGroupComponent, NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { projectsRoutingModule } from './projects-routing.module';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectInfoComponent } from './project-details/project-info/project-info.component';
import { ProjectSkillsComponent } from './project-details/project-skills/project-skills.component';
import { ProjectDatesComponent } from './project-details/project-dates/project-dates.component';

import { ProjectFilesComponent } from './project-details/project-files/project-files.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { TaskDatesComponent } from './tasks/task-dates/task-dates.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';

import { ProjectMembersComponent } from './project-details/project-members/project-members.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectsListComponent } from '../shared/components/project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaskCommentsComponent } from './tasks/task-comments/task-comments.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { TaskBodyComponent } from './tasks/task-body/task-body.component';

const antdModule = [
  NzButtonModule,
  NzCardModule,
  NzAvatarModule,
  NzRateModule,
  NzBadgeModule,
  NzProgressModule,
  NzRadioModule,
  NzTableModule,
  NzDropDownModule,
  NzTimelineModule,
  NzTabsModule,
  NzTagModule,
  NzListModule,
  NzCalendarModule,
  NzToolTipModule,
  NzFormModule,
  NzModalModule,
  NzSelectModule,
  NzUploadModule,
  NzInputModule,
  NzPaginationModule,
  NzDatePickerModule,
  NzCheckboxModule,
  NzMessageModule,
  NzCollapseModule,
  NzInputModule,
  NzCommentModule,
  
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    projectsRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    ...antdModule,
  ],
  
  declarations: [
    ProjectDetailsComponent,
    TasksComponent,
    ProjectInfoComponent,
    ProjectSkillsComponent,
    ProjectDatesComponent,
    ProjectFilesComponent,
    TaskDatesComponent,
    TaskDetailsComponent,
    ProjectsComponent,
    ProjectMembersComponent,
    EditProjectComponent,
    ProjectsListComponent,
    CreateProjectComponent,
    TaskCommentsComponent,
    CreateTaskComponent,
    TaskBodyComponent,
  ],
  providers: [ThemeConstantService, AppsService, TableService],
})
export class ProjectsModule {}
