import { Component } from '@angular/core';
import { HeroBanner } from '../../Header/hero-banner/hero-banner';
import { Section1Brands } from '../../Section/section1-brands/section1-brands';
import { Section2Card } from '../../Section/section2-card/section2-card';
import { Section3ClothesCard } from '../../Section/section3-clothes-card/section3-clothes-card';
import { Section4Categories } from '../../Section/section-4-categories/section-4-categories';
import { Section5Testimonial } from '../../Section/section-5-testimonial/section-5-testimonial';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroBanner,
    Section1Brands,
    Section2Card,
    Section3ClothesCard,
    Section4Categories,
    Section5Testimonial,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
