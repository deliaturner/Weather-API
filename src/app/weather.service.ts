import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = "9655af12c9883cca40a2ebdc267cc9dd";
  constructor(private httpClient: HttpClient) { }

  getData(city: string = "ann arbor") {
    return this.httpClient.get("api.openweathermap.org/data/2.5/weather?", {
      params: { q: city, appId: this.apiKey, units: "imperial" }
      // q={city name}&appid={API key}
    })
  }
}
// by city
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// by city, state
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
// by zip code
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}