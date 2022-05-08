import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  {
    path: 'project-details',
    component: ProjectDetailsComponent,
    data: {
      title: 'project-details',
    },
  },
  {
    path: 'tasks',
    component: TasksComponent,
    data: {
      title: 'tasks',
    },
  },
  {
    path: 'developer-projects',
    component: ProjectsComponent,
    data: {
      title: 'developer-projects',
    },
  },

  {
    path: 'admin-projects',
    component: ProjectsComponent,
    data: {
      title: 'admin-projects',
    },
    // canActivate:[AuthGuardAdmin]
  },

  {
    path: 'edit-project',
    component: EditProjectComponent,
    data: {
      title: 'admin-projects',
    },
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class projectsRoutingModule {}
