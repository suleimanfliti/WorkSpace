import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: 'home',
        component: DashboardComponent,
        data: {
            title: 'Dashboard ',
            headerDisplay: "none"
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [RouterModule],
  })
export class DashboardRoutingModule { }
