import { Component } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-iss-tracker',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './iss-tracker.html',
  styleUrl: './iss-tracker.css',
  providers: [Myservice],
})
export class ISSTracker {
  startDate = '';
  endDate = '';
  asteroidsByDate: { [date: string]: any[] } = {};
  loading = false;
  error = '';
  Object: any;

  constructor(private asteroidService: Myservice) {}

  searchAsteroids(): void {
    if (!this.startDate || !this.endDate) {
      this.error = 'Please select both start and end dates.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.asteroidService.getAsteroids(this.startDate, this.endDate).subscribe({
      next: (data) => {
        this.asteroidsByDate = data.near_earth_objects;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch asteroid data.';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
