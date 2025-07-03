import { Component } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-latest-launch',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './latest-launch.html',
  styleUrl: './latest-launch.css',
  providers: [Myservice],
})
export class LatestLaunch {
  launch: any;
  rocketName: string = '';
  loading = true;

  constructor(private myservices: Myservice) {}

  ngOnInit(): void {
    this.myservices.getLatestLaunch().subscribe({
      next: (launchData) => {
        this.launch = launchData;
        const rocketId = launchData.rocket;

        // Fetch rocket name using rocket ID
        this.myservices.getRocketById(rocketId).subscribe({
          next: (rocketData) => {
            this.rocketName = rocketData.name;
            this.loading = false;
          },
          error: (err) => {
            console.error('Error fetching rocket data', err);
            this.loading = false;
          },
        });
      },
      error: (err) => {
        console.error('Error fetching latest launch', err);
        this.loading = false;
      },
    });
  }
}
