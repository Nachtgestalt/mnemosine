import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Reportes',
        link: './reportes',
        index: 0
      },
      {
        label: 'Usuarios',
        link: './usuarios',
        index: 1
      },
      {
        label: 'Historicos',
        link: './historicos',
        index: 0
      },
      {
        label: 'OAI',
        link: './oai',
        index: 1
      },
      {
        label: 'Visor de objetos digitales',
        link: './visor',
        index: 0
      },
      {
        label: 'Preservación digital',
        link: './preservacion-digital',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
