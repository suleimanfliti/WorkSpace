import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Profile } from 'src/app/shared/interfaces/profile.type';
import { User } from 'src/app/shared/interfaces/user.type';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { UserSerivce } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css'],
})
export class EditInfoComponent implements OnInit {
  editInfo: FormGroup;
  coverUrl: string;
  pictureUrl: string;
  selectedFiles: File = null;
  ///////////////////
  profile: Profile;
  user: User;
  error: string;
  isLoaded: boolean = false;
  isEdit: boolean = false;
  isChanged: boolean;
  edit_info: FormGroup;

  constructor(
    private msg: NzMessageService,
    private fb: FormBuilder,
    private userService: UserSerivce,
    private profileService: ProfileService
  ) {}
  ngOnInit(): void {
    this.getDataProfile();
  }

  //send request to save edit.
  submitForm() {
    this.sendRequestEdit();
  }
  //send request edit.
  private sendRequestEdit() {
    this.isEdit = true;
    const newData = this.createDataRequest();
    this.profileService.editProfileApi(newData.newProfile).subscribe(
      (resData) => {
        //here is done edit profile
      },
      (error) => {
        // this.error = error + ' and ';
        //here is error edit.
      }
    );
    this.userService.editUserApi(newData.newUser).subscribe(
      (resData) => {
        //here is done edit profile
        this.isEdit = false;
      },
      (error) => {
        /*
        this.error += error;
        this.isEdit = false;
        //here is error edit.
        */
      }
    );
  }
  //create new informaion.
  private createDataRequest() {
    const newUser: User = {
      name: this.edit_info.value.name,
      phone: this.edit_info.value.phone,
      email: this.edit_info.value.email,
    };
    const newProfile: Profile = {
      city: this.edit_info.value.city,
      github: this.edit_info.value.github,
      gitlab: this.edit_info.value.gitlab,
      website: this.edit_info.value.website,
      social_media: this.edit_info.value.social_media,
      weekly_hours: this.edit_info.value.weekly_hours,
      picture: this.pictureUrl,
      cover: this.coverUrl,
    };
    return { newUser, newProfile };
  }
  //get data from profile service or fetch data from serve.
  private async getDataProfile() {
    this.profile = this.profileService.getProfile();
    if (!this.profile.id) {
      this.isLoaded = true;
      this.profile = await this.profileService.getProfileApi().toPromise();
    }
    this.user = this.userService.getUser();
    if (!this.user.id) {
      this.user = await this.userService.getCurrentUserApi().toPromise();
      this.isLoaded = false;
    }
    this.initSigninForm();
  }
 
  //change upload file and get url file and get file picture and upload to nz-zction.
  private profilePicture(info: { file: NzUploadFile }): void {
    this.isChanged = true;
    this.getBase64(info.file.originFileObj, (img: string) => {
      this.pictureUrl = img;
    });
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file);
    }
    if (status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
  private coverPicture(info: { file: NzUploadFile }): void {
    this.isChanged = true;
    this.getBase644(info.file.originFileObj, (img: string) => {
      this.coverUrl = img;
    });
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file);
    }
    if (status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
  private getBase644(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  private initSigninForm() {
    const emailRegex = new RegExp(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/);
    const patternUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.edit_info = this.fb.group({
      name: [this.user.name, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      phone: [
        this.user.phone,
        [Validators.required, Validators.pattern('[0-9]{10}')],
      ],
      city: [this.profile.city],
      website: [this.profile.website, [Validators.pattern(patternUrl)]],
      gitlab: [this.profile.gitlab, [Validators.pattern(patternUrl)]],
      github: [this.profile.github, [Validators.pattern(patternUrl)]],
      social_media: [
        this.profile.social_media,
        [Validators.pattern(patternUrl)],
      ],
      weekly_hours: [
        this.profile.weekly_hours,
        [Validators.min(0), Validators.max(100)],
      ],
    });
  }
}
