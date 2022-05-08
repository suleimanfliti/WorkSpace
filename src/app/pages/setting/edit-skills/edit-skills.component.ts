import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/interfaces/Skill.type';
import { SkillService } from 'src/app/shared/services/skill.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css'],
})
export class EditSkillsComponent implements OnInit {
  skills: Skill[];
  isLoading: boolean = false;
  error: string;
  constructor(private skillService: SkillService) {}

  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');
  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');

  demoValue = 80;
  demoValue1 = 60;
  demoValue2 = 50;
  demoValue3 = 65;

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
    if (!this.skills[0]) {
      this.isLoading = true;
      this.skillService.getSkillsApi().subscribe(
        (resData) => {
          this.skills = resData;
          this.isLoading = false;
        },
        (error) => {
          this.error = error;
          this.isLoading = false;
        }
      );
    }
  }
}
