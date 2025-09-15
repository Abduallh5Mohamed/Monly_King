import { Component, Input } from '@angular/core';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';

export interface TrendingItem {
  id: string;
  title: string;
  cover: string; // image path
  discount?: number; // percentage
  genres?: string[];
  rating?: number; // 0-5
  reviewsCount?: number;
  price: number; // base price after discount
  originalPrice?: number; // optional original price
  description?: string;
}

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent {
  @Input() items: TrendingItem[] = [];
  @Input() title = 'TRENDING';
  @Input() accent = 'NOW!';
}
