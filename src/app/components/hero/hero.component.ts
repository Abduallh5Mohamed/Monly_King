import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() title = 'THE ULTIMATE GAMING ACCOUNTS MARKETPLACE';
  @Input() subtitle = 'Buy & Sell Premium Gaming Accounts Safely and Instantly.';
  @Input() ctaLabel = 'EXPLORE ACCOUNTS';
  @Input() ctaLink: string | null = null;
}
