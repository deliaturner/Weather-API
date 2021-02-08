import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cityInput: string = '';
  zipInput: string = '';
  results: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  searchByCity() {
    this.weatherService.getData(this.cityInput).subscribe((data: any) => {
      this.results = data;
      this.cityInput = '';
    })
  }

  searchByZip() {
    let zipCode: number = parseInt(this.zipInput);
    this.weatherService.getZipData(zipCode).subscribe((data: any) => {
      this.results = data;
      this.zipInput = '';
    })
  }

}
