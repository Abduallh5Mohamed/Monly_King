import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrendingComponent, TrendingItem } from './components/trending/trending.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, TrendingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Monly King');
  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/#features' },
    { label: 'Pricing', path: '/#pricing' },
    { label: 'Docs', external: 'https://angular.dev' }
  ];
  trendingItems: TrendingItem[] = [
    {
      id: 'spiderman',
      title: "Marvel's Spider-Man",
      cover: 'assets/videos/hero-bg.mp4#t=5', // placeholder using video frame fallback
      discount: 60,
      genres: ['Action', 'Single-player', 'Adventure'],
      rating: 5,
      reviewsCount: 18000,
      price: 60,
      originalPrice: 150,
      description: 'Experience the rise of Miles Morales as the new hero masters explosive new powers to become his own Spider-Man.'
    }
  ];
}
