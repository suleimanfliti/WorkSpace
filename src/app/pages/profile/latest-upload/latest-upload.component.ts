import { Component, OnInit } from '@angular/core';
import { UserSerivce } from 'src/app/shared/services/user.service';
import { ThemeConstantService } from 'src/app/shared/services/theme-constant.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { FileService } from 'src/app/shared/services/file.service';

@Component({
  selector: 'me-latest-list',
  templateUrl: './latest-upload.component.html',
  styleUrls: ['./latest-upload.component.css'],
})
export class LatestUploadListComponent implements OnInit {
  i: number = 1;
  isLoaded: boolean = false;
  error: string;
  // files: File[];
  constructor(
    private colorConfig: ThemeConstantService,
    private fileService: FileService,
    private msg: NzMessageService
  ) {}

  themeColors = this.colorConfig.get().colors;
  blue = this.themeColors.blue;
  blueLight = this.themeColors.blueLight;
  cyan = this.themeColors.cyan;
  cyanLight = this.themeColors.cyanLight;
  gold = this.themeColors.gold;
  purple = this.themeColors.purple;
  purpleLight = this.themeColors.purpleLight;
  red = this.themeColors.red;

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  ngOnInit(): void {
    /*
    this.files = this.fileService.getFiles();
    if (!this.files[0]) {
      this.isLoaded = true;
      this.fileService.getFilesApi().subscribe(
        (latRes) => {
          this.isLoaded = false;
          this.files = latRes;
        },
        (error) => {
          this.isLoaded = false;
          this.error = error;
        }
      );
    }*/
  }
  view(index: number) {
    //get file and open.
    console.log(`view ${index}`);
  }
  download(index: number) {
    //get file and open.
    console.log(`download ${index}`);
  }
  remove(index:number){
    console.log(`delete ${index}`);
  }
  files = [
    {
      id: 1,
      icon: 'file-pdf',
      name: 'my-Resume.pdf',
      color: this.red,
      size: '19.8MB',
    },
    {
      id: 2,
      icon: 'file-word',
      name: 'certificat.doc',
      color: this.blue,
      size: '1.2MB',
    },
    {
      id: 3,
      icon: 'file-excel',
      name: 'Expensess.xls',
      color: this.cyan,
      size: '518KB',
    },
    {
      id: 4,
      icon: 'file-text',
      name: 'Receipt.txt',
      color: this.purple,
      size: '355KB',
    },

    {
      id: 5,
      icon: 'file-ppt',
      name: 'Presentation.ppt',
      color: this.gold,
      size: '2.7MB',
    },
  ];
}
