import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { navbarData } from './nav-data';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  collapsed = false;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidenav(): void {
    this.collapsed = false;
  }
}
