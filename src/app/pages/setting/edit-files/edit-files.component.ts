import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-upload-files',
  templateUrl: './edit-files.component.html',
  styleUrls: ['./edit-files.component.css'],
})
export class EditFilesComponent implements OnInit {
  constructor() {}

  defaultFileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
  ];
  fileList1 = [...this.defaultFileList];

  ngOnInit(): void {}
}
