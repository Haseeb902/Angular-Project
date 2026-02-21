import { Component } from '@angular/core';
import { AfterViewInit, AfterViewChecked } from '@angular/core';
@Component({
  selector: 'app-section2-card',
  imports: [],
  templateUrl: './section2-card.html',
  styleUrl: './section2-card.css',
})
export class Section2Card implements AfterViewInit, AfterViewChecked {
  card = [
    {
      icon: 'bi bi-hand-thumbs-up-fill',
      title: 'Premium Quality Fabrics',
      description:
        'High-quality, comfortable, and durable clothing designed to provide the perfect fit in every season.',
    },

    {
      icon: 'fa fa-palette',
      title: 'Trendy & Modern Designs',
      description:
        'Each collection is crafted according to the latest fashion trends — stylish, elegant, and unique.',
    },

    {
      icon: 'fa fa-tag',
      title: 'Affordable & Fair Prices',
      description:
        'Top-quality fashion at affordable prices, with regular discounts and bundle deals.',
    },

    {
      icon: 'fa fa-truck-fast',
      title: 'Fast Delivery & Easy Returns',
      description: 'Fast delivery across Karachi with 7-day hassle-free exchanges and returns.',
    },
  ];

  observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.initObserver();
  }

  ngAfterViewChecked() {
    // Re-init observer after every view update
    this.initObserver();
  }

  initObserver() {
    if (this.observer) this.observer.disconnect(); // purane observer ko remove karo

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => this.observer.observe(el));
  }
}
