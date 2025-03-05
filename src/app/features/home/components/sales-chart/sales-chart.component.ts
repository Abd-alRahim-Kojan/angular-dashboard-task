import { Component, OnInit } from '@angular/core';
import {
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexTooltip,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: any[];
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: any;
  fill: ApexFill;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-sales-chart',
  template: `
    <div class="chart-container">
      <div class="filter-buttons">
        <button (click)="filterData('day')" [class.active]="currentFilter === 'day'">Day</button>
        <button (click)="filterData('week')" [class.active]="currentFilter === 'week'">Week</button>
        <button (click)="filterData('month')" [class.active]="currentFilter === 'month'">Month</button>
        <button (click)="filterData('year')" [class.active]="currentFilter === 'year'">Year</button>
      </div>
      <apx-chart
        [series]="chartOptions.series!"
        [chart]="chartOptions.chart!"
        [xaxis]="chartOptions.xaxis!"
        [yaxis]="chartOptions.yaxis!"
        [dataLabels]="chartOptions.dataLabels!"
        [grid]="chartOptions.grid!"
        [fill]="chartOptions.fill!"
        [markers]="chartOptions.markers!"
        [tooltip]="chartOptions.tooltip!"
        [title]="chartOptions.title!"
      ></apx-chart>
    </div>
  `,
  styles: [`
    .chart-container {
      width: 100%;
      height: 350px;
    }
    .filter-buttons {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
    }
    .filter-buttons button {
      padding: 8px 16px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      background: white;
      cursor: pointer;
    }
    .filter-buttons button.active {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
  `]
})
export class SalesChartComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public currentFilter: string = 'day';

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [320, 450, 600, 400, 550, 500, 700]
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      title: {
        text: 'Sales Report',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 600
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [0, 100]
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: '#8c8c8c'
          }
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
          formatter: (value: number) => {
            return value.toString();
          },
          style: {
            colors: '#8c8c8c'
          }
        }
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      markers: {
        size: 5,
        colors: ['#3b82f6'],
        strokeColors: 'white',
        hover: {
          size: 8
        }
      },
      tooltip: {
        theme: 'light',
        marker: {
          show: false
        },
        x: {
          show: false
        },
        y: {
          formatter: (value: number) => {
            return value.toString();
          },
          title: {
            formatter: () => 'Sales: '
          }
        }
      }
    };
  }
  ngOnInit(): void { }

  // Method to update chart data dynamically
  updateChartData(newData: number[], categories: string[]): void {
    this.chartOptions.series = [{
      name: 'Sales',
      data: newData
    }];
    this.chartOptions.xaxis = {
      ...this.chartOptions.xaxis,
      categories: categories
    };
  }

  filterData(period: string): void {
    this.currentFilter = period;
    switch (period) {
      case 'day':
        this.updateChartData(
          [320, 450, 600, 400, 550, 500, 700],
          ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        );
        break;
      case 'week':
        this.updateChartData(
          [2200, 2500, 2800, 2600, 2700, 2900, 3000],
          ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
        );
        break;
      case 'month':
        this.updateChartData(
          [8500, 9000, 9500, 9200, 9800, 10000, 10500],
          ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7']
        );
        break;
      case 'year':
        this.updateChartData(
          [95000, 98000, 102000, 105000, 108000, 110000, 115000],
          ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
        );
        break;
    }
  }
}
