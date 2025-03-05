import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.module').then((m) => m.OrdersModule),
  },
  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./features/users/users.module').then((m) => m.UsersModule),
  // },
  // {
  //   path: 'items',
  //   loadChildren: () =>
  //     import('./features/items/items.module').then((m) => m.ItemsModule),
  // },
  // {
  //   path: 'transactions',
  //   loadChildren: () =>
  //     import('./features/transactions/transactions.module').then(
  //       (m) => m.TransactionsModule
  //     ),
  // },
  // {
  //   path: 'reports',
  //   loadChildren: () =>
  //     import('./features/reports/reports.module').then((m) => m.ReportsModule),
  // },
  // {
  //   path: 'messages',
  //   loadChildren: () =>
  //     import('./features/messages/messages.module').then(
  //       (m) => m.MessagesModule
  //     ),
  // },
  // {
  //   path: 'support',
  //   loadChildren: () =>
  //     import('./features/support/support.module').then((m) => m.SupportModule),
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./features/settings/settings.module').then(
  //       (m) => m.SettingsModule
  //     ),
  // },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
