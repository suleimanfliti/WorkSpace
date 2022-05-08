import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../interfaces/profile.type';
import { User } from '../../interfaces/user.type';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfileService } from '../../services/profile.service';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { UserSerivce } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  profile: Profile;
  user: any;
  picture: string;
  searchVisible: boolean = false;
  quickViewVisible: boolean = false;
  isFolded: boolean;
  isExpand: boolean;

  constructor(
    private themeService: ThemeConstantService,
    private authService: AuthenticationService,
    private router: Router,
    private userSerivce: UserSerivce,
    private profileService : ProfileService
  ) {}

  ngOnInit(): void {
    this.profile = this.userSerivce.getProfile();
    this.picture = this.profile.picture;
    if (!this.picture) {
      this.profileService.getProfileApi().subscribe((resData) => {
        this.picture = resData.picture;
      });
    }
    this.user = this.userSerivce.getUser();
    if (!this.user.name) {
      this.userSerivce.getCurrentUserApi().subscribe((resData) => {
        this.user = resData;
      });
    }

    this.themeService.isMenuFoldedChanges.subscribe(
      (isFolded) => (this.isFolded = isFolded)
    );
    this.themeService.isExpandChanges.subscribe(
      (isExpand) => (this.isExpand = isExpand)
    );
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['authentication/login']);
    this.userSerivce.deleteData();
  }

  toggleFold() {
    this.isFolded = !this.isFolded;
    this.themeService.toggleFold(this.isFolded);
  }

  toggleExpand() {
    this.isFolded = false;
    this.isExpand = !this.isExpand;
    this.themeService.toggleExpand(this.isExpand);
    this.themeService.toggleFold(this.isFolded);
  }

  searchToggle(): void {
    this.searchVisible = !this.searchVisible;
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

  notificationList = [
    {
      title: 'You received a new message',
      time: '8 min',
      icon: 'mail',
      color: 'ant-avatar-' + 'blue',
    },
    {
      title: 'New user registered',
      time: '7 hours',
      icon: 'user-add',
      color: 'ant-avatar-' + 'cyan',
    },
    {
      title: 'System Alert',
      time: '8 hours',
      icon: 'warning',
      color: 'ant-avatar-' + 'red',
    },
    {
      title: 'You have a new update',
      time: '2 days',
      icon: 'sync',
      color: 'ant-avatar-' + 'gold',
    },
  ];
}
