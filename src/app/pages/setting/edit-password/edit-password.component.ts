import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css'],
})
export class EditPasswordComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService,
    private message: NzMessageService
  ) {}

  changePWForm: FormGroup;

  ngOnInit(): void {
    this.changePWForm = this.fb.group({
      oldPassword: [null, [Validators.required, Validators.min(8)]],
      password: [null, [Validators.required, Validators.min(8)]],
      confirm_password: [
        null,
        [Validators.required, this.confirmationValidator],
      ],
    });
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>Do you want to change your password?</i>',
      nzOnOk: () => this.message.success('Password Change Successfully'),
    });
  }

  submitForm(): void {
    for (const i in this.changePWForm.controls) {
      this.changePWForm.controls[i].markAsDirty();
      this.changePWForm.controls[i].updateValueAndValidity();
    }

    this.showConfirm();
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.changePWForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };
}
