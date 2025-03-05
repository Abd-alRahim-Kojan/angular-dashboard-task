import { Component, OnInit } from '@angular/core';
import {
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexPlotOptions,
  ApexGrid,
  ApexTitleSubtitle,
  ApexYAxis
} from 'ng-apexcharts';

export type ChartOptions = {
  series: any[];
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-visits-chart',
  template: `
    <div class="chart-container">
      <div class="filter-categories">
        <button (click)="filterData('D')">D</button>
        <button (click)="filterData('W')">W</button>
        <button (click)="filterData('M')">M</button>
        <button (click)="filterData('Y')">Y</button>
      </div>
      <apx-chart
        [series]="chartOptions.series!"
        [chart]="chartOptions.chart!"
        [xaxis]="chartOptions.xaxis!"
        [yaxis]="chartOptions.yaxis!"
        [dataLabels]="chartOptions.dataLabels!"
        [tooltip]="chartOptions.tooltip!"
        [plotOptions]="chartOptions.plotOptions!"
        [grid]="chartOptions.grid!"
        [title]="chartOptions.title!"
      ></apx-chart>
    </div>
  `,
  styles: [`
    .chart-container {
      width: 100%;
      height: 100%;
    }
    .filter-categories {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }
    .filter-categories button {
      padding: 8px 16px;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      background: white;
      cursor: pointer;
    }
    .filter-categories button:hover {
      background: #f1f5f9;
    }
  `]
})
export class VisitsChartComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Visits',
          data: [45, 35, 25, 15, 55, 35],
          color: '#3b82f6'
        }
      ],
      chart: {
        type: 'bar',
        height: 400,
        toolbar: {
          show: false
        }
      },
      title: {
        text: 'Visits',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333'
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '45%',
          colors: {
            backgroundBarColors: ['#e6e6e6'],
            backgroundBarOpacity: 0
          }
        }
      },
      xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S'],
        labels: {
          show: true // Hide x-axis labels
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false // Hide y-axis labels
        }
      },
      grid: {
        show: false // Hide horizontal and vertical grid lines
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        theme: 'light',
        y: {
          formatter: (value) => {
            return value + ' visits';
          }
        }
      }
    };
  }

  ngOnInit(): void { }

  // Method to update chart data dynamically
  updateChartData(newData: number[]): void {
    this.chartOptions.series = [{
      name: 'Visits',
      data: newData,
      color: '#3b82f6' // Maintain dark blue color
    }];
  }

  // Method to handle filter changes
  filterData(period: 'D' | 'W' | 'M' | 'Y'): void {
    let newData: number[];
    switch (period) {
      case 'D':
        newData = [45, 35, 25, 15, 55, 35];
        this.chartOptions.xaxis = { ...this.chartOptions.xaxis, categories: ['M', 'T', 'W', 'T', 'F', 'S'] };
        break;
      case 'W':
        newData = [320, 280, 305, 290, 330];
        this.chartOptions.xaxis = { ...this.chartOptions.xaxis, categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'] };
        break;
      case 'M':
        newData = [1200, 1400, 1100, 1500, 1300, 1600];
        this.chartOptions.xaxis = { ...this.chartOptions.xaxis, categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] };
        break;
      case 'Y':
        newData = [15000, 16000, 14500, 17000];
        this.chartOptions.xaxis = { ...this.chartOptions.xaxis, categories: ['2020', '2021', '2022', '2023'] };
        break;
    }
    this.updateChartData(newData);
  }
}
