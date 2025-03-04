import { Component, HostListener, NgZone } from '@angular/core';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public isMenuOpen: boolean = false;
  public navLinks: NavLink[] = [
    { path: '', label: 'الرئيسية' },
    { path: '/ads', label: 'الإعلانات' },
    { path: '/requests', label: 'الطلبات' },
    { path: '/workers', label: 'المشتغلين' },
    { path: '/contact us', label: 'تواصل معنا' },
  ];

  constructor(private ngZone: NgZone) {
    this.onResize();
  }

  @HostListener('window:resize')
  private onResize(): void {
    this.ngZone.run(() => {
      if (typeof window !== 'undefined') {
        this.isMenuOpen = window.innerWidth >= 768;
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
