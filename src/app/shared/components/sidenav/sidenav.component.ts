import { Component, HostListener, NgZone } from '@angular/core';

interface NavItem {
  path: string;
  icon: string;
  label: string;
  hasNotification?: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
    `
    .active {
      background-color: #f5f5f5;
      color: #007bff;
    }
    `
  ]
})
export class SidenavComponent {
  public isMenuOpen: boolean = false;

  navigationItems: NavItem[] = [
    { path: '/dashboard', icon: 'fa-regular fa-house', label: 'Dashboard' },
    { path: '/orders', icon: 'fa-regular fa-cart-shopping', label: 'Orders' },
    { path: '/users', icon: 'fa-light fa-users', label: 'Users' },
    { path: '/items', icon: 'fa-regular fa-store', label: 'Items' },
    { path: '/transactions', icon: 'fa-regular fa-arrows-rotate', label: 'Transactions' },
    { path: '/reports', icon: 'fa-regular fa-file-chart-column', label: 'Reports' },
  ];

  bottomNavItems: NavItem[] = [
    { path: '/messages', icon: 'fa-regular fa-comment', label: 'Messages', hasNotification: true },
    { path: '/support', icon: 'fa-regular fa-headset', label: 'Support' },
    { path: '/settings', icon: 'fa-regular fa-cog', label: 'Settings' },
  ];

    constructor(private ngZone: NgZone) {
      this.onResize();
    }

    @HostListener('window:resize')
    private onResize(): void {
      this.ngZone.run(() => {
        if (typeof window !== 'undefined') {
          this.isMenuOpen = window.innerWidth >= 769;
        }
      });
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): void {
      if (event.key === 'Escape' && this.isMenuOpen) {
        this.toggleMenu();
      }
    }

    public toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
