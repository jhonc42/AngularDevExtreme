
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { VariosComponent } from './components/varios/varios.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'grafica', component: GraficaComponent },
    { path: 'varios', component: VariosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
