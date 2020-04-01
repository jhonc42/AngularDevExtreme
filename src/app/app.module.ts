import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { APP_ROUTING } from './app.routes';

import {CountriesService} from './services/countries.service';
import {PersonService} from './services/person.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { VariosComponent } from './components/varios/varios.component';

// import { DxButtonModule } from 'devextreme-angular/ui/button';
// import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';

// import { DxPieChartModule } from 'devextreme-angular/ui/pie-chart';

import {
  DxButtonModule,
  DxLoadIndicatorModule,
  DxPieChartModule,
	DxSelectBoxModule,
	DxTextAreaModule,
	DxDateBoxModule,
  DxFormModule,
  DxCircularGaugeModule,
  DxSliderModule, DxNumberBoxModule
} from 'devextreme-angular';
import { MedidorComponent } from './components/medidor/medidor.component';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GraficaComponent,
    VariosComponent,
    MedidorComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxLoadIndicatorModule,
    DxPieChartModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxCircularGaugeModule,
    DxSliderModule,
    DxNumberBoxModule,
    APP_ROUTING
  ],
  providers: [
    CountriesService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
