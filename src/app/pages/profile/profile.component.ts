import { Component, OnInit } from '@angular/core';
import { Gender, Profile } from 'src/app/shared/interfaces/profile.type';
import { User } from 'src/app/shared/interfaces/user.type';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { UserSerivce } from 'src/app/shared/services/user.service';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  token: string;
  profile: Profile;

  constructor(
    private colorConfig: ThemeConstantService,
    private userService: UserSerivce,
    private profileService: ProfileService
  ) {}

  themeColors = this.colorConfig.get().colors;
  blue = this.themeColors.blue;
  blueLight = this.themeColors.blueLight;
  cyan = this.themeColors.cyan;
  cyanLight = this.themeColors.cyanLight;
  gold = this.themeColors.gold;
  purple = this.themeColors.purple;
  purpleLight = this.themeColors.purpleLight;
  red = this.themeColors.red;

  ngOnInit(): void {
    //GET PROFILE DATA.
    this.profile = this.userService.getProfile();
    if (!this.profile.id) {
      this.profileService.getProfileApi().subscribe(
        (resData) => {
          this.profile = resData;
        },
        (error) => {
          console.log(error);
        }
      );
    }

    // this.userService.getProfileApi().subscribe(
    //   (resData) => {
    //     this.profile = resData;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // console.log(this.profile);
  }
}
