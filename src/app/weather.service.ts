import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = "9655af12c9883cca40a2ebdc267cc9dd";

  constructor(private httpClient: HttpClient) { }

  getData(city: string): any {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?`,
      { params: { q: city, appid: this.apiKey, units: "imperial" } }
    )
  }

  getZipData(zipCode: string): any {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?`,
      { params: { zip: zipCode, appid: this.apiKey, units: "imperial" } }
    )
  }
}
// by city
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// by zip code
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}