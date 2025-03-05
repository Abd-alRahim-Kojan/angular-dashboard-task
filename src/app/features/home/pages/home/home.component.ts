import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { productsModel } from '../../models/products.model';

interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  change?: {
    value: number;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public statCards: StatCard[] = [
    {
      title: 'Total Revenue',
      value: '$52.6k',
      icon: 'fas fa-chart-line',
      change: {
        value: 3.4,
      }
    },
    {
      title: 'Today Revenue',
      value: '$1024',
      icon: 'fas fa-calendar-day',
      change: {
        value: -5.5,
      }
    },
    {
      title: 'Items Sold',
      value: '22',
      icon: 'fas fa-shopping-cart'
    },
    {
      title: 'Users Active',
      value: '11',
      icon: 'fas fa-users'
    }
  ];
  public productsData: productsModel[] = [];


  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((data) => {
      this.productsData = data;
    });
  }

}
