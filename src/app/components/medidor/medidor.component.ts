import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidor',
  templateUrl: './medidor.component.html',
  styleUrls: ['./medidor.component.css']
})
export class MedidorComponent implements OnInit {
  label: any;
  tooltip: any;
  tooltipEnabled: any;

  constructor() {
  }

  format(value) {
    return value + "%";
  }

  ngOnInit(): void {
  }

}
