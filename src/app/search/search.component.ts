import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userInput: string = '';
  results: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  searchByCity() {
    this.weatherService.getData(this.userInput).subscribe(data => {
      this.results = data;
      this.userInput = '';
    })
  }

}
