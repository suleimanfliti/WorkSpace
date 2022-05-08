import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../shared/interfaces/profile.type';
import { User } from '../../shared/interfaces/user.type';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ProfileService } from '../../shared/services/profile.service';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { UserSerivce } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.css']
})
export class UserSkillsComponent implements OnInit {

  user: User;
  profile: Profile;
  isLoaded: boolean = false;
  error: string;
  skillListData = [
    'php',
    'laravel',
    'Photoshop',
    'Angular',
    'Web Design',
    'Mobile App Design',
    'User Interface',
  ];
  
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private userService: UserSerivce,
    private colorConfig: ThemeConstantService,
    private profileService: ProfileService
  ) { }
  ngOnInit(): void{
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
