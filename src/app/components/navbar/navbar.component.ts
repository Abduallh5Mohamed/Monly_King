import { Component, Input, signal, HostListener } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface NavLink {
  label: string;
  path?: string;
  external?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() brand = 'Monly King';
  @Input() links: NavLink[] = [];
  @Input() transparent = false; // legacy, no longer needed for scroll effect but kept for compatibility
  menuOpen = signal(false);
  toggle() { this.menuOpen.update(v => !v); }
  scrolled = signal(false);
  scrollProgress = signal(0); // 0 → 1

  @HostListener('window:scroll') onScroll(){
    const y = window.scrollY || window.pageYOffset;
    this.scrolled.set(y > 120);
    const doc = document.documentElement;
    const h = (doc.scrollHeight - doc.clientHeight) || 1;
    this.scrollProgress.set(Math.min(1, Math.max(0, y / h)));
  }
}
