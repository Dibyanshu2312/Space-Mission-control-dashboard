import { Component } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mission-detail',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './mission-detail.html',
  styleUrl: './mission-detail.css',
})
export class MissionDetail {
  missionList: string[] = [
    'Starlink 6-10',
    'Starlink 6-9',
    'Starlink 6-8',
    'Starlink 6-7',
    'Starlink 6-6',
    'Starlink 6-5',
    'Starlink 6-4',
    'Starlink 6-3',
    'Crew-5',
    'CRS-25',
    'Transporter-9',
    'Ax-3',
    'SES-18 and SES-19',
    'Intelsat G-37',
    'EchoStar 24',
    'Galaxy 33',
    'DART',
    'GPS III SV06',
  ];

  selectedMission: string = '';
  mission: any;
  loading = false;
  errorMsg = '';

  constructor(private myservices: Myservice) {}

  fetchMission() {
    if (!this.selectedMission) return;

    this.loading = true;
    this.errorMsg = '';
    this.myservices.getMissionByName(this.selectedMission).subscribe({
      next: (res) => {
        if (res.docs.length > 0) {
          this.mission = res.docs[0];
        } else {
          this.errorMsg = 'Mission not found.';
          this.mission = null;
        }
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Something went wrong.';
        this.mission = null;
        this.loading = false;
      },
    });
  }
}
