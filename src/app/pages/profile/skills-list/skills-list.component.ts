import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/interfaces/Skill.type';
import { SkillService } from 'src/app/shared/services/skill.service';
import { UserSerivce } from 'src/app/shared/services/user.service';

@Component({
  selector: 'me-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css', '../profile.component.css'],
})
export class SkillsListComponent implements OnInit {
  skills: Skill[] = [];
  isLoaded: boolean = true;
  error: string;
  i: number = 1;
  // error: string = ' error not found';
  constructor(
    private userService: UserSerivce,
    private skillService: SkillService
  ) {}

  ngOnInit(): void {
    this.skills = this.userService.getSkills();
    if (!this.skills[0]) {
      this.isLoaded = true;
      console.log('fetch skills');
      this.skillService.getSkillsApi().subscribe(
        (resData) => {
          this.skills = resData;
          this.isLoaded = false;
        },
        (error) => {
          // this.error = error;
          this.isLoaded = false;
        }
      );
    }
  }
  skillList = [
    {
      name: 'HTML5',
      description:
        'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history.',
      last_use: '5 MAR 2021',
      level: 100,
      status: 'good',
    },
    {
      name: 'CSS3',
      description:
        'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. ',
      last_use: '1 JAN 2020',
      level: 60,
      status: 'mid',
    },
  ];
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false,
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2',
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3',
    },
  ];
}
