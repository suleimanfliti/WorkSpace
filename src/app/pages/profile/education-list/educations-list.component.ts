import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/shared/interfaces/education.type';
import { EducationService } from 'src/app/shared/services/education.service';
import { UserSerivce } from 'src/app/shared/services/user.service';

@Component({
  selector: 'me-educations-list',
  templateUrl: './educations-list.component.html',
  styleUrls: ['./educations-list.component.css'],
})
export class EducationsListComponent implements OnInit {
  educations: Education[] = [];
  isLoaded: boolean = false;
  error: string;
  i: number = 1;
  constructor(
    private userService: UserSerivce,
    private eductionService: EducationService
  ) {}

  ngOnInit(): void {
    this.educations = this.userService.getEducations();
    if (!this.educations[0]) {
      this.isLoaded = true;
      console.log('fetch eductions');
      this.eductionService.getEducationsListApi().subscribe(
        (resData) => {
          this.educations = resData;
          console.log(this.educations.length);
          this.isLoaded = false;
        },
        (error) => {
          this.isLoaded = false;
          this.error = error;
        }
      );
    }

  }
  eduListData = [
    {
      img: 'assets/images/others/cambridge-thumb.png',
      degree: '73%',
      school: 'Faculty of information technology',
      major: 'Damascus Univercity',
      activities:
        'Specialization in Software Engineering and Information Systems. ',
      city: 'Damascus',
      start_date: '7 JAN 2015',
      end_date: '8 OCT 2020',
    },
  ];
}
