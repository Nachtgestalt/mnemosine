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
import {WelcomeComponent} from './home/welcome/welcome.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'inicio',
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
                  title: 'Consulta', subtitle: '/ Busqueda'
                }
              },
              {
                path: 'resultado', component: ResultadoBusquedaComponent,
                data: {
                  title: 'Consulta', subtitle: '/ Resultado busqueda'
                }
              },
              {
                path: 'detalle', component: DetalleConsultaComponent,
                data: {
                  title: 'Consulta', subtitle: '/ Detalle pieza'
                }
              },
              {path: '', redirectTo: 'busqueda', pathMatch: 'full'}
            ]
          },
          {path: 'catalogo', component: CatalogoComponent, data: {title: 'Catálogo', subtitle: '/ Busqueda',}},
          {path: 'prestamos', component: PrestamosComponent, data: {title: 'Prestamos', subtitle: ''}},
          {path: 'investigacion', component: InvestigacionComponent, data: {title: 'Investigación', subtitle: ''}},
          {path: 'restauracion', component: RestauracionComponent, data: {title: 'Restauración', subtitle: ''}},
          {path: 'administracion', component: AdministracionComponent, data: {title: 'Administración', subtitle: ''}},
          {path: 'bienvenida', component: WelcomeComponent, data: {title: 'Inicio', subtitle: ''}},
          {path: '', redirectTo: '/inicio/bienvenida', pathMatch: 'full'}
        ]
      },
      {path: '', redirectTo: '/inicio/bienvenida', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
