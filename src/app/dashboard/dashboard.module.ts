import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

/** Import any ng-zorro components as the module required except icon module */
import { NgChartjsModule } from 'ng-chartjs';
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
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { UserSerivce } from '../shared/services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../shared/interceptor/token.interceptor';
import { ErrorInterceptor } from '../shared/interceptor/error.interceptor';
import { UserBoxComponent } from './user-box/user-box.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { ProjectsChartComponent } from './projects-chart/projects-chart.component';
import { UserTasksComponent } from './user-tasks/user-tasks.component';

/** Assign all ng-zorro modules to this array*/
const antdModule = [
  NzButtonModule,
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
  NzCheckboxModule,
  NgChartjsModule,
];


@NgModule({
  imports: [SharedModule, DashboardRoutingModule, ...antdModule],
  exports: [],
  declarations: [DashboardComponent, UserBoxComponent, UserSkillsComponent, UserProjectsComponent, ProjectsChartComponent, UserTasksComponent],
  providers: [],
})
export class DashboardModule {}
