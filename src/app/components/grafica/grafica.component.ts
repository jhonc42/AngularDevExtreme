import { Component, OnInit } from '@angular/core';
import { Area, CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  areas: Area[];

  constructor( serviceCountries: CountriesService) {
    this.areas = serviceCountries.getAreas();
   }

  ngOnInit(): void {
  }
  pointClickHandler(e) {
      this.toggleVisibility(e.target);
  }

  legendClickHandler (e) {
      let arg = e.target,
          item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
  }

  toggleVisibility(item) {
      if(item.isVisible()) {
          item.hide();
      } else { 
          item.show();
      }
  }

}
