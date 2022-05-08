import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
  {
    path: '/dashboard/home',
    title: 'Dashboard',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'dashboard',
    submenu: [],
  },

  {
    path: '/projects/developer-projects',
    title: 'projects',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'project',
    submenu: [],
  },
];
