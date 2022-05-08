import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { SettingComponent } from './setting/setting.component';

import { CurrentUserComponent } from './profile/current-user/current-user.component';
import { ProjectListMeComponent } from './profile/project-list/project-list.component';
import { ReviewsListComponent } from './profile/review-list/reviews-list.component';
import { EducationsListComponent } from './profile/education-list/educations-list.component';
import { SkillsListComponent } from './profile/skills-list/skills-list.component';
import { LatestUploadListComponent } from './profile/latest-upload/latest-upload.component';
import { EditInfoComponent } from './setting/edit-info/edit-info.component';
import { EditEduComponent } from './setting/edit-edu/edit-edu.component';
import { AddEduComponent } from './setting/edit-edu/add-edu/add-edu.component';
import { EditSkillsComponent } from './setting/edit-skills/edit-skills.component';
import { AddSkillsComponent } from './setting/add-skills/add-skills.component';
import { MembersComponent } from './members/members.component';
import { EditPasswordComponent } from './setting/edit-password/edit-password.component';
import { EditFilesComponent } from './setting/edit-files/edit-files.component';
import { ProfileComponent } from './profile/profile.component';
import { EditItemEducationComponent } from './setting/edit-edu/edit-item/edit-item.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { ProductComponent } from './profile/product/product.component';
const antdModule = [
  NzCardModule,
  NzSkeletonModule,
  NzAvatarModule,
  NzPaginationModule,
  NzDividerModule,
  NzButtonModule,
  NzListModule,
  NzTableModule,
  NzDropDownModule,
  NzRadioModule,
  NzRateModule,
  NzTabsModule,
  NzTagModule,
  NzFormModule,
  NzDatePickerModule,
  NzSelectModule,
  NzSwitchModule,
  NzUploadModule,
  NzToolTipModule,
  NzModalModule,
  NzMessageModule,
  NzInputModule,
  NzInputNumberModule,
  NzProgressModule,
  NzRadioModule,
  NzAvatarModule,
  NzSpinModule,
  NzAlertModule,
  NzCollapseModule,
  NzEmptyModule
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PagesRoutingModule,

    ...antdModule,
  ],
  declarations: [
    ProfileComponent,
    SettingComponent,

    CurrentUserComponent,
    ProfileComponent,
    ProjectListMeComponent,
    ReviewsListComponent,
    EducationsListComponent,
    SkillsListComponent,
    LatestUploadListComponent,
    EditInfoComponent,
    EditEduComponent,
    AddEduComponent,
    EditSkillsComponent,
    AddSkillsComponent,
    MembersComponent,
    EditPasswordComponent,
    EditFilesComponent,
    EditItemEducationComponent,
    ProductComponent,
    
  ],
  providers: [
    ThemeConstantService,

    // UserSerivce,
  ],
})
export class PagesModule {}
