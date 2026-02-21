import { Component } from '@angular/core';
import { ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

interface HeroSlide {
  image: string;
  shapeImage: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  cta1: string;
  cta2: string;
}

@Component({
  selector: 'app-hero-banner',
  imports: [],
  standalone: true,
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner implements OnInit, OnDestroy {
  @ViewChild('heroRoot', { static: true }) heroRoot!: ElementRef<HTMLElement>;

  heroSlides: HeroSlide[] = [
    {
      image: 'img/hero-banner-f.jpg',
      shapeImage: '/img/hero-banner-F.png',
      tag: 'Wear the Moment',
      title: 'Fashion That',
      highlight: 'Defines You',
      description: 'Discover premium fashion for every moment — from everyday comfort',
      cta1: 'Shop Collection',
      cta2: 'View Lookbook',
    },
    {
      image: 'assets/product-women-1.jpg',
      shapeImage: '/img/hero-banner-W.png',
      tag: 'Confidence in Every Look',
      title: 'Grace Meets Modern ',
      highlight: 'Style',
      description: 'Embrace sophistication with our curated women’s collection.',
      cta1: 'Shop Women',
      cta2: 'New Arrivals',
    },
    {
      image: 'assets/product-men-1.jpg',
      shapeImage: '/img/hero-banner-M.png',
      tag: 'Built for Bold Living',
      title: 'Style with ',
      highlight: 'Purpose',
      description: 'Elevate your wardrobe with menswear that classic tailoring.',
      cta1: 'Shop Men',
      cta2: 'View Collection',
    },
    {
      image: 'assets/product-kids-1.jpg',
      shapeImage: '/img/hero-banner-K.png',
      tag: 'Made for Play',
      title: 'Big Style for Little',
      highlight: 'Legends',
      description: 'Durable and comfortable fashion made for growing adventures',
      cta1: 'Shop Kids',
      cta2: 'Explore More',
    },
  ];

  current = 0;
  autoplayInterval: any = null;
  autoplayDelay = 5000;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  next() {
    this.current = (this.current + 1) % this.heroSlides.length;
  }

  prev() {
    this.current = (this.current - 1 + this.heroSlides.length) % this.heroSlides.length;
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const el = this.heroRoot.nativeElement;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rx = (y / rect.height) * -10;
    const ry = (x / rect.width) * 10;

    this.renderer.setStyle(el, '--rx', `${rx}deg`);
    this.renderer.setStyle(el, '--ry', `${ry}deg`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.heroRoot.nativeElement, '--rx', `0deg`);
    this.renderer.setStyle(this.heroRoot.nativeElement, '--ry', `0deg`);
  }

  onHoverEnter() {
    this.stopAutoplay();
  }

  onHoverLeave() {
    this.startAutoplay();
  }






  
}
