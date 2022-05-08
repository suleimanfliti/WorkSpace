import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { AddEduComponent } from './setting/edit-edu/add-edu/add-edu.component';
import { AddSkillsComponent } from './setting/add-skills/add-skills.component';
import { EditEduComponent } from './setting/edit-edu/edit-edu.component';
import { EditFilesComponent } from './setting/edit-files/edit-files.component';
import { EditInfoComponent } from './setting/edit-info/edit-info.component';
import { EditPasswordComponent } from './setting/edit-password/edit-password.component';
import { EditSkillsComponent } from './setting/edit-skills/edit-skills.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Profile',
      headerDisplay: 'none',
    },
  },
  {
    path: 'setting',
    component: SettingComponent,
    data: {
      title: 'Setting',
      headerDisplay: 'none',
    },
  },
  {
    path: 'edit-info',
    component: EditInfoComponent,
    data: {
      title: 'edit info',
      headerDisplay: 'none',
    },
  },
  {
    path: 'edit-edu',
    component: EditEduComponent,
    data: {
      title: 'edit edu',
      headerDisplay: 'none',
    },
  },
  {
    path: 'add-edu',
    component: AddEduComponent,
    data: {
      title: 'edit edu',
      headerDisplay: 'none',
    },
  },
  {
    path: 'add-skill',
    component: AddSkillsComponent,
    data: {
      title: 'edit edu',
      headerDisplay: 'none',
    },
  },
  {
    path: 'edit-skills',
    component: EditSkillsComponent,
    data: {
      title: 'edit edu',
      headerDisplay: 'none',
    },
  },
  {
    path: 'edit-password',
    component: EditPasswordComponent,
    data: {
      title: 'edit edu',
      headerDisplay: 'none',
    },
  },
  {
    path: 'edit-files',
    component: EditFilesComponent,
    data: {
      title: 'edit edu',
      headerDisplay: 'none',
    },
  },

  // {
  //     path: 'add',
  //     component: AddComponent,
  //     data: {
  //         title: 'Add',
  //         headerDisplay: "none"
  //     }
  // },
  // {
  //     path: 'add1',
  //     component: Add1Component,
  //     data: {
  //         title: 'Add1',
  //         headerDisplay: "none"
  //     }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
