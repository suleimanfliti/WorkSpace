import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/shared/interfaces/Skill.type';
import { SkillService } from 'src/app/shared/services/skill.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css'],
})
export class AddSkillsComponent implements OnInit {
  add_skill: FormGroup;
  error: string;
  isLoaded: boolean = false;
  isChange: boolean = false;
  level: number = 0;
  @Input() skill: Skill;
  constructor(private fb: FormBuilder, private skillService: SkillService) {}

  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');
  dateFormat = 'yyyy/MM/dd';

  ngOnInit(): void {
    this.initSkillForm();
    if (this.skill) {
      this.setValueSkill();
    } else {
    }
  }
  submitForm() {
    if (!this.add_skill.valid) {
      return;
    }
    const newSkill: Skill = this.add_skill.getRawValue();
    if (this.skill) {
      this.isLoaded = true;
      this.skillService.editSkillApi(newSkill, this.skill.id).subscribe(
        (resData) => {
          this.isLoaded = true;
        },
        (error) => {
          this.error = error;
          this.isLoaded = true;
        }
      );
    } else {
      this.skillService.addSkillApi(newSkill).subscribe(
        (resData) => {
          this.isLoaded = true;
        },
        (error) => {
          this.error = error;
          this.isLoaded = true;
        }
      );
    }
    this.onChanges();
    //send request Api.
  }
  onChanges(): void {
    this.add_skill.valueChanges.subscribe(() => {
      this.isChange = true;
    });
  }
  setValueSkill() {
    this.add_skill.setValue({
      name: this.skill.name,
      description: this.skill.description,
      last_use: this.skill.last_use,
      level: this.skill.level,
    });
  }
  initSkillForm() {
    this.add_skill = this.fb.group({
      name: [null, [Validators.required]],
      last_use: [null, [Validators.required]],
      description: [null, [Validators.required]],
      level: [null, [Validators.min(1), Validators.max(100)]],
    });
  }

}
