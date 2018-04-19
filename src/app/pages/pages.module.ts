import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports: [ // si no se van a usar dentro del modulo no se tiene que exportar
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
})

export class PagesModule {}
