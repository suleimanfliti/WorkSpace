import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Education } from 'src/app/shared/interfaces/education.type';
import { EducationService } from 'src/app/shared/services/education.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css'],
})
export class EditEduComponent implements OnInit {
  educations: Education[];
  isLoaded: boolean = false;
  error: string;
  //////////////////////////////
  degree: number;
  school: string;
  start_date: Date;
  end_date: Date;

  @ViewChild('inputDegree') inputDegree: ElementRef;
  @ViewChild('inputSchool') inputSchool: ElementRef;
  @ViewChild('inputStartDate') inputStartDate: ElementRef;
  constructor(private educationService: EducationService) {}

  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');
  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');

  demoValue = 80;
  demoValue1 = 60;
  demoValue2 = 50;
  demoValue3 = 65;

  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';

  ngOnInit(): void {
    this.educations = this.educationService.getEducations();
    this.getData();
  }
  save() {
    console.log(this.inputDegree.nativeElement.value);
    console.log(this.inputSchool.nativeElement.value);
    console.log(this.start_date);
  }
  async getData() {
    this.educations = this.educationService.getEducations();
    if (!this.educations[0]) {
      this.educations = await this.educationService
        .getEducationsListApi()
        .toPromise();
    }
    console.log(this.educations);
  }
}
