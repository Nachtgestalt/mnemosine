import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Personas',
        link: './personas',
        index: 0
      },
      {
        label: 'Organizaciónes',
        link: './organizaciones',
        index: 1
      },
      {
        label: 'Exposiciónes',
        link: './exposiciones',
        index: 2
      },
      {
        label: 'Movimientos',
        link: './movimientos',
        index: 3
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
