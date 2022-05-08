import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/shared/interfaces/education.type';
import { EducationService } from 'src/app/shared/services/education.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css'],
})
export class AddEduComponent implements OnInit {
  add_edu: FormGroup;
  error: string;
  isLoaded: boolean = false;
  isChange: boolean = false;
  @Input() edu: Education;
  dateFormat = 'yyyy/MM/dd';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initEduForm();
    if (this.edu) {
      this.initEduFormEdit();
    } else {
    }
    this.onChanges();
  }
  onChanges(): void {
    this.add_edu.valueChanges.subscribe(() => {
      this.isChange = true;
    });
  }
  submitForm() {
    if (!this.add_edu.valid) {
      return;
    }
    const newEdu: Education = this.add_edu.getRawValue();
    if (this.edu) {
      this.isLoaded = true;
      //   this.skillService.editSkillApi(newSkill, this.skill.id).subscribe(
      //     (resData) => {
      //       this.isLoaded = true;
      //     },
      //     (error) => {
      //       this.error = error;
      //       this.isLoaded = true;
      //     }
      //   );
      // } else {
      //   this.skillService.addSkillApi(newSkill).subscribe(
      //     (resData) => {
      //       this.isLoaded = true;
      //     },
      //     (error) => {
      //       this.error = error;
      //       this.isLoaded = true;
      //     }
      //   );
      // }
    }
    //send request Api.
  }
  initEduFormEdit() {
    this.add_edu.setValue({
      school: this.edu.school,
      degree: this.edu.degree,
      activities: this.edu.activities,
      major: this.edu.major,
      start_date: this.edu.start_date,
      end_date: this.edu.end_date,
    });
  }
  initEduForm() {
    this.add_edu = this.fb.group({
      school: [null, [Validators.required]],
      degree: [
        null,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      major: [null, [Validators.required]],
      activities: [null],
      start_date: [null, [Validators.required]],
      end_date: [null, [Validators.required]],
    });
  }
}
