import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: 'home',
        icon: 'pi pi-home'
      },
      {
        label: 'Cadastros',
        items: [
          {
            label: 'Localidades',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Pais' , routerLink: 'pais'}, { label: 'Estado' }]
          }
        ]
      }
    ];
  }
}
