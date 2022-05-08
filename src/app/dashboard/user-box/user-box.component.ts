import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../shared/interfaces/profile.type';
import { User } from '../../shared/interfaces/user.type';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ProfileService } from '../../shared/services/profile.service';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { UserSerivce } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  user: User;
  profile: Profile;
  isLoaded: boolean = false;
  error: string;
  
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private userService: UserSerivce,
    private colorConfig: ThemeConstantService,
    private profileService: ProfileService
  ) { }

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

  memberList = [
    {
      name: 'Erin Gonzales',
      img: 'assets/images/avatars/thumb-1.jpg',
      mail: 'erin.gon@gmail.com',
    },
    {
      name: 'Darryl Day',
      img: 'assets/images/avatars/thumb-2.jpg',
      mail: 'darryl.d@gmail.com',
    },
    {
      name: 'Marshall Nichols',
      img: 'assets/images/avatars/thumb-3.jpg',
      mail: 'marshalln@gmail.com',
    },
    {
      name: 'Virgil Gonzales',
      img: 'assets/images/avatars/thumb-4.jpg',
      mail: 'virgil14@gmail.com',
    },
    {
      name: 'Nicole Wyne',
      img: 'assets/images/avatars/thumb-5.jpg',
      mail: 'nicolew@gmail.com',
    },
    {
      name: 'Riley Newman',
      img: 'assets/images/avatars/thumb-6.jpg',
      mail: 'rileyn93@gmail.com',
    },
    {
      name: 'Pamela Wanda',
      img: 'assets/images/avatars/thumb-7.jpg',
      mail: 'pamelaw@gmail.com',
    },
  ];


}
