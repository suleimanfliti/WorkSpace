import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../shared/interfaces/profile.type';
import { User } from '../shared/interfaces/user.type';
import { ProfileService } from '../shared/services/profile.service';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { UserSerivce } from '../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User;
  profile: Profile;
  isLoaded: boolean = false;
  error: string;

  constructor(

    private userService: UserSerivce,
    private colorConfig: ThemeConstantService,
    private profileService: ProfileService
  ) {}
  ngOnInit(): void {
    // this.userService.initUser();
    this.user = this.userService.getUser();
    if (!this.user.id) {
      this.isLoaded = true;
      this.userService.getCurrentUserApi().subscribe(
        (resData) => {
          this.user = resData;
          this.isLoaded = false;
        },
        (error) => {
          this.error = error;
          this.isLoaded = false;
        }
      );
    }
    this.profile = this.userService.getProfile();
    if (!this.profile.id) {
      this.profileService.getProfileApi().subscribe(
        (resData) => {
          this.profile = resData;
          this.isLoaded = false;
        },
        (error) => {
          this.error = error;
          this.isLoaded = false;
        }
      );
    }
  }





 
}
