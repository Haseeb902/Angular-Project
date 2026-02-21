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

  kidsCards = [
    { title: 'Jacket', desc: 'Cute Jackets', img: 'assets/images/kids-jacket.jpg' },
    { title: 'T-Shirt', desc: 'Casual T-Shirts', img: 'assets/images/kids-tshirt.jpg' },
    { title: 'Denim', desc: 'Denim Collection', img: 'assets/images/kids-denim.jpg' },
    { title: 'Denim', desc: 'Denim Collection', img: 'assets/images/kids-denim.jpg' },
    { title: 'Denim', desc: 'Denim Collection', img: 'assets/images/kids-denim.jpg' },
  ];
}
