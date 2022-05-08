import { Component, Input, OnInit } from '@angular/core';
import { Me } from 'src/app/shared/interfaces/Me.type';
import { Gender, Profile } from 'src/app/shared/interfaces/profile.type';
import { User } from 'src/app/shared/interfaces/user.type';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { UserSerivce } from 'src/app/shared/services/user.service';

@Component({
  selector: 'me-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css'],
})
export class CurrentUserComponent implements OnInit {
  user: User;
  profile: Profile;
  gender: Gender;
  isLoaded: boolean = false;
  message: string;

  constructor(
    private userService: UserSerivce,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    //get profile data.
    this.profile = this.userService.getProfile();
    if (!this.profile.id) {
      this.isLoaded = true;
      this.profileService.getProfileApi().subscribe(
        (resData) => {
          this.profile = resData;
          this.isLoaded = false;
          console.log(resData);
        },
        (error) => {
          this.isLoaded = false;
          this.message = error;
        }
      );
    }
    this.gender = this.profile.gender !== 1 ? Gender.Male : Gender.Femail;
    //get user data.
    this.user = this.userService.getUser();
    if (!this.user.id) {
      this.userService.getCurrentUserApi().subscribe((resData) => {
        this.user = resData;
      });
    }
  }
}
