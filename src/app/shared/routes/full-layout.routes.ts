import { Routes, RouterModule } from '@angular/router';

export const FullLayout_ROUTES: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('../../authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full',
    //   },
    //   {
    //     path: '',

    //   },
    // ],
  },
];
