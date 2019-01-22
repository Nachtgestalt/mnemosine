import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {ConsultaComponent} from './consulta/consulta.component';
import {CatalogoComponent} from './catalogo/catalogo.component';
import {PrestamosComponent} from './prestamos/prestamos.component';
import {InvestigacionComponent} from './investigacion/investigacion.component';
import {RestauracionComponent} from './restauracion/restauracion.component';
import {AdministracionComponent} from './administracion/administracion.component';
import {ResultadoBusquedaComponent} from './consulta/resultado-busqueda/resultado-busqueda.component';
import {BusquedaConsultaComponent} from './consulta/busqueda-consulta/busqueda-consulta.component';
import {DetalleConsultaComponent} from './consulta/detalle-consulta/detalle-consulta.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {title: 'Inicio'},
        children: [
          {
            path: 'consulta', component: ConsultaComponent,
            data: {
              title: 'Consulta', subtitle: '/ Busqueda'
            },
            children: [
              {
                path: 'busqueda', component: BusquedaConsultaComponent,
                data: {
                  title: 'Catálogo', subtitle: '/ Busqueda'
                }
              },
              {
                path: 'resultado', component: ResultadoBusquedaComponent,
                data: {
                  title: 'Catálogo', subtitle: '/ Resultado busqueda'
                }
              },
              {
                path: 'detalle', component: DetalleConsultaComponent,
                data: {
                  title: 'Catálogo', subtitle: '/ Detalle pieza'
                }
              },
              {path: '', redirectTo: 'busqueda', pathMatch: 'full'}
            ]
          },
          {path: 'catalogo', component: CatalogoComponent, data: {title: 'Consulta', subtitle: '/ Busqueda',}},
          {path: 'prestamos', component: PrestamosComponent, data: {title: 'Prestamos', subtitle: ''}},
          {path: 'investigacion', component: InvestigacionComponent, data: {title: 'Investigación', subtitle: ''}},
          {path: 'restauracion', component: RestauracionComponent, data: {title: 'Restauración', subtitle: ''}},
          {path: 'administracion', component: AdministracionComponent, data: {title: 'Administración', subtitle: ''}},
        ]
      },
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
