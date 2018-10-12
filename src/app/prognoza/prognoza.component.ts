import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-prognoza',
  templateUrl: './prognoza.component.html',
  styleUrls: ['./prognoza.component.scss']
})
export class PrognozaComponent implements OnInit {
  weather: any;
  mjesto = 'Zagreb';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.mjesto = localStorage.getItem('mjesto');

    if (this.mjesto != null) {
      this.mjesto = JSON.parse(this.mjesto);
    } else {
      this.mjesto = 'Zagreb';
    }

    this.weatherService.
      searchWeatherInfo(this.mjesto).subscribe(
        response => {
          this.weather = response;
          console.log(this.weather);
        }
      );
  }

  onSubmit() {
    this.mjesto = this.mjesto;
    console.log(this.mjesto);
    localStorage.setItem('mjesto', JSON.stringify(this.mjesto));

    this.weatherService.
      searchWeatherInfo(this.mjesto).subscribe(
        response => {
          this.weather = response;
          console.log(this.weather);
        }
      );
  }

}
