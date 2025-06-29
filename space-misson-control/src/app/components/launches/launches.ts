import { Component } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-launches',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './launches.html',
  styleUrl: './launches.css',
  providers: [Myservice],
})
export class Launches {
  constructor(private myservice: Myservice) {}
  rockets: any[] = [];
  missions: any[] = [];
  loading: boolean = true;
  error: string = '';

  ngOnInit(): void {
    this.getRockets();
    this.allmissions();
  }

  getRockets(): void {
    this.myservice.getLaunches().subscribe({
      next: (data) => {
        console.log('Rockets data:', data);
        this.rockets = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching rockets:', error);
        this.error = 'Failed to load rockets data';
        this.loading = false;
      },
    });
  }

  allmissions(): void {
    this.myservice.getAllMissions().subscribe({
      next: (data) => {
        console.log('Missions data:', data);
        this.missions = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching missions:', error);
        this.error = 'Failed to load missions data';
        this.loading = false;
      },
    });
  }
}
