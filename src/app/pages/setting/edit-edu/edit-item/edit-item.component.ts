import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Education } from 'src/app/shared/interfaces/education.type';
import { EducationService } from 'src/app/shared/services/education.service';

@Component({
  selector: 'edit-item-education',
  templateUrl: './edit-item.component.html',
})
export class EditItemEducationComponent implements OnInit, OnChanges {
  @Input() education: Education;
  dateFormat = 'yyyy/MM/dd';
  title : string ;
  ///////////////////////////////
  //input tow bind data
  start_date: Date;
  end_date: Date;
  school: string;
  degree: number;
  activities: string;
  isChanged: boolean = false;

  constructor(private educationService: EducationService) {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.start_date = this.education.start_date;
    this.end_date = this.education.end_date;
    this.school = this.education.school;
    this.degree = this.education.degree;
    this.activities = this.education.activities;
  }
  save() {
    this.education.school =
      this.education.school !== this.school
        ? this.school
        : this.education.school;
    this.education.degree =
      this.education.degree !== this.degree
        ? this.degree
        : this.education.degree;
    this.education.start_date =
      this.education.start_date !== this.start_date
        ? this.start_date
        : this.education.start_date;
    this.education.end_date =
      this.education.end_date !== this.end_date
        ? this.end_date
        : this.education.end_date;
    this.education.activities =
      this.education.activities !== this.activities
        ? this.activities
        : this.education.activities;
    console.log(this.education);
    // this.education.activities = this.activities;
    // this.educationService.editEducation(this.education);
  }
  back() {
    this.start_date = this.education.start_date;
    this.end_date = this.education.end_date;
    this.school = this.education.school;
    this.degree = this.education.degree;
    this.isChanged = false;
  }
  onChange() {
    this.isChanged = true;
    if (
      !this.degree ||
      !this.start_date ||
      !this.end_date ||
      this.school === ''
    )
      this.isChanged = false;
  }
}
