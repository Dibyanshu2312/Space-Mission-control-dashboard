import { Component } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mars-weather',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './mars-weather.html',
  styleUrl: './mars-weather.css',
  providers: [Myservice],
})
export class MarsWeather {
  solKeys: string[] = [];
  weatherData: any = {};
  loading = true;
  error = '';

  constructor(private myservices: Myservice) {}

  ngOnInit(): void {
    this.myservices.getMarsWeather().subscribe({
      next: (data) => {
        this.solKeys = data.sol_keys || [];
        this.weatherData = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch Mars weather.';
        this.loading = false;
      },
    });
  }
}
