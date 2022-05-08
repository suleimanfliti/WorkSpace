import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProjectList } from 'src/app/shared/interfaces/project-list.type';
import { AppsService } from 'src/app/shared/services/apps.service';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  dateFormat = 'yyyy/MM/dd';
  view: string = 'cardView';
  newProject: boolean = false;
  projectListRaw: ProjectList[];
  projectList: ProjectList[];
  searchInput: string;
  @Input() role = 'developer';

  constructor(
    private projectListSvc: AppsService,
    private modalService: NzModalService,
    private tablesvc: TableService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.projectListSvc.getProjectListJson().subscribe((data) => {
      this.projectListRaw = data;
      this.projectList = data;
    });

    this.validateForm = this.fb.group({});
    this.addField();
  }

  search() {
    const data = this.projectListRaw;
    this.projectList = this.tablesvc.search(this.searchInput, data);
  }

  showNewProject(newProjectContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Create New Project',
      nzContent: newProjectContent,
      nzFooter: [
        {
          label: 'Create Project',
          type: 'primary',
          onClick: () =>
            this.modalService.confirm({
              nzTitle: 'Are you sure you want to create this project?',
              nzOnOk: () => this.modalService.closeAll(),
            }),
        },
      ],
      nzWidth: 800,
    });
  }

  validateForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id =
      this.listOfControl.length > 0
        ? this.listOfControl[this.listOfControl.length - 1].id + 1
        : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`,
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    console.log(this.validateForm.value);
  }
}
