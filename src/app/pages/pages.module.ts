import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {PAGES_ROUTES} from './pages.routes';
import {MaterialModule} from '../material/material.module';
import {ComponentsModule} from '../components/components.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';
import { RestauracionComponent } from './restauracion/restauracion.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { ResultadoBusquedaComponent } from './consulta/resultado-busqueda/resultado-busqueda.component';
import { BusquedaConsultaComponent } from './consulta/busqueda-consulta/busqueda-consulta.component';
import {NgbCarousel, NgbCarouselModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetalleConsultaComponent } from './consulta/detalle-consulta/detalle-consulta.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ConsultaComponent,
    CatalogoComponent,
    PrestamosComponent,
    InvestigacionComponent,
    RestauracionComponent,
    AdministracionComponent,
    ResultadoBusquedaComponent,
    BusquedaConsultaComponent,
    DetalleConsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    PAGES_ROUTES,
    MaterialModule,
    ComponentsModule,
    NgbCarouselModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
