import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
  weather: any;
  mjesto = 'Zagreb';
  data: Date = new Date();

  page = 4;
  page1 = 5;
  page2 = 3;
  focus;
  focus1;
  focus2;

  date: { year: number, month: number };
  model: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;

  constructor(private weatherService: WeatherService, private renderer: Renderer, config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

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
  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}
