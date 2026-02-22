import { Component, signal, effect } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-section1-brands',
  imports: [],
  templateUrl: './section1-brands.html',
  styleUrl: './section1-brands.css',
})
export class Section1Brands {
  brands = signal([
    { img: 'img/brand-1.png', name: 'Brand One' },
    { img: 'img/brand-2.png', name: 'Brand Two' },
    { img: 'img/brand-5.png', name: 'Brand Three' },
    { img: 'img/brand-6.png', name: 'Brand Four' },
    { img: 'img/brand-7.png', name: 'Brand Five' },
    { img: 'img/brand-8.png', name: 'Brand Six' },
    { img: 'img/brand-4.png', name: 'Brand Seven' },
    { img: 'img/brand-3.png', name: 'Brand Nine' },
    { img: 'img/brand-9.png', name: 'Brand Eight' },
    { img: 'img/brand-10.png', name: 'Brand Ten' },
    { img: 'img/brand-11.png', name: 'Brand Eleven' },
    { img: 'img/brand-12.png', name: 'Brand Tweleve' },
    { img: 'img/brand-13.png', name: 'Brand Thirteen' },
    { img: 'img/brand-14.png', name: 'Fourteen' },
  ]);

  ngAfterViewInit() {
    const el = document.querySelector('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    if (el) observer.observe(el);
  }
}
