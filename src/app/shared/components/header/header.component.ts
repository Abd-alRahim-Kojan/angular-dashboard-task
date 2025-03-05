import { Component } from '@angular/core';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public navLinks: NavLink[] = [
    { path: '', label: 'الرئيسية' },
    { path: '/ads', label: 'الإعلانات' },
    { path: '/requests', label: 'الطلبات' },
    { path: '/workers', label: 'المشتغلين' },
    { path: '/contact us', label: 'تواصل معنا' },
  ];
}
