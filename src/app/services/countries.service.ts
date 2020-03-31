import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Area {
  country: string;
  area: number;
}


export class CountriesService {
  areas: Area[] = [{
    country: "Russia",
    area: 12
  }, {
    country: "Canada",
    area: 7
  }, {
    country: "USA",
    area: 7
  }, {
    country: "China",
    area: 7
  }, {
    country: "Brazil",
    area: 6
  }, {
    country: "Australia",
    area: 5
  }, {
    country: "India",
    area: 2
  }, {
    country: "Others",
    area: 55
  }];

  constructor() { }
  getAreas(): Area[] {
    return this.areas;
  }
}
