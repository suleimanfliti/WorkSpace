import { Component, OnInit } from '@angular/core';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';

@Component({
  selector: 'app-projects-chart',
  templateUrl: './projects-chart.component.html',
  styleUrls: ['./projects-chart.component.css']
})
export class ProjectsChartComponent implements OnInit {

  constructor(private colorConfig: ThemeConstantService) 
  {}

  ngOnInit(): void {
  }
  
  themeColors = this.colorConfig.get().colors;
  blue = this.themeColors.blue;
  blueLight = this.themeColors.blueLight;
  cyan = this.themeColors.cyan;
  cyanLight = this.themeColors.cyanLight;
  gold = this.themeColors.gold;
  purple = this.themeColors.purple;
  purpleLight = this.themeColors.purpleLight;
  red = this.themeColors.red;

  customersChartLabels: string[] = ['Ready', 'In progress', 'Behind'];
  customersChartData: number[] = [350, 450, 100];
  customersChartColors: Array<any> = [
    {
      backgroundColor: [this.cyan, this.purple, this.gold],
      pointBackgroundColor: [this.cyan, this.purple, this.gold],
    },
  ];
  customersChartOptions: any = {
    cutoutPercentage: 75,
    maintainAspectRatio: false,
  };
  customersChartType = 'doughnut';

}
