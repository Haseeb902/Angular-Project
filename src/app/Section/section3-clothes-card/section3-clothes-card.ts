import { Component } from '@angular/core';

@Component({
  selector: 'app-section3-clothes-card',
  imports: [],
  templateUrl: './section3-clothes-card.html',
  styleUrl: './section3-clothes-card.css',
})
export class Section3ClothesCard {
  menCards = [
    { title: 'JACKET', desc: 'STYLISH JACKETS', img: 'img/card-1.png' },
    { title: 'DENIM', desc: 'DENIM COLLECTION', img: 'img/card-2.jpeg' },
    { title: 'T-SHIRTS', desc: 'CASUAL T-SHIRTs', img: 'img/card-3.jpeg' },
    { title: 'ACTIVE-WEAR', desc: 'ACTIVE WEAR ZIPPER ', img: 'img/card-4.jpeg' },
    { title: 'SHIRTS', desc: 'CHECKERED SHIRTS', img: 'img/card-5.jpeg' },
  ];

  womenCards = [
    { title: 'DRESSES', desc: 'BELTED JUMPSUIT', img: 'img/w-card-1.jpeg' },
    {
      title: 'SWEATERS',
      desc: 'SWEATER WITH VISIBLE SEAMS',
      img: 'img/w-card-2.jpeg',
    },
    {
      title: 'OUTERWEAR',
      desc: 'QUILTED PUFFER JACKET WITH FUR HOOD',
      img: 'img/w-card-3.jpeg',
    },
    { title: 'JEANS', desc: 'WIDE LEG   ', img: 'img/w-card-4.jpeg' },
    { title: 'SHIRTS', desc: 'TEXTURED SHIRT', img: 'img/w-card-5.jpeg' },
  ];

  kidsCard = [
    {
      title: 'Print Textured Shirt',
      desc: 'Relaxed Fit | Boys Toddler',
      img: 'img/j-card-1.jpg',
    },
    { title: 'Relaxed Fit Jeans', desc: 'Relaxed Fit | Boys Junior', img: 'img/j-card-2.jpg' },
    { title: 'Basic Co-Ord Set', desc: 'Regular Fit | Girls Toddler', img: 'img/j-card-3.jpg' },
    { title: 'JUMPSUIT', desc: 'REGULAR FIT | GIRLS JUNIOR', img: 'img/j-card-4.jpg' },
    { title: 'Striped Polo Shirt', desc: 'Regular Fit | Boys Toddler', img: 'img/j-card-5.jpg' },
  ];
}
