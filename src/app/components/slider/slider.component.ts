import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  label: any;
  tooltip: any;
  tooltipEnabled: any;

  @Input() sliderValue: number;

  @Output() sliderValueChild: EventEmitter<number>;

  constructor() {
      this.sliderValueChild = new EventEmitter();
   }

  ngOnInit(): void {
  }
  format(value) {
    return value + '%';
  }
  captureValue(ev){
    console.log(ev);
    this.sliderValueChild.emit(this.sliderValue);
  }

}
