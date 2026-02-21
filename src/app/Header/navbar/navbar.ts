import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  ngAfterViewInit(): void {
    const dropdownMenu = document.querySelector('.dropdown_menu') as HTMLElement;
    const toggleBtn = document.querySelector('.toggle_btn') as HTMLElement;
    const toggleBtnIcon = document.querySelector('.toggle_btn i') as HTMLElement;

    toggleBtn.onclick = () => {
      dropdownMenu.classList.toggle('open');

      const isOpen = dropdownMenu.classList.contains('open');

      toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };
  }

  isScrolled = false;
} // Agar scroll 50px se zyada ho to background black ho jaye
