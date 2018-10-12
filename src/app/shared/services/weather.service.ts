import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(public http: Http) {
    console.log('Pokrenut Servis!');
  }

  searchWeatherInfo(mjesto): Observable<any> {
    const APPID = 'aea13a21663d4ccb02ba8449e58e4cab';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + mjesto + '&APPID=' + APPID + '&units=metric';
    return this.http.get(url)
      .map(res => res.json());
  }

}
