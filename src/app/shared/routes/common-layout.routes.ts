import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        redirectTo: 'dashboard/home',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('../../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  //Pages
  {
    path: 'pages',
    data: {
      title: 'Pages ',
    },

    children: [
      {
        path: '',
        redirectTo: '/pages/profile',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('../../pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: 'projects',
    data: {
      title: 'projects',
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('../../projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
    ],
  },
];
