import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mars-missions',
  imports: [CommonModule, HttpClientModule],

  templateUrl: './mars-missions.html',
  styleUrl: './mars-missions.css',
  providers: [Myservice],
})
export class MarsMissions {
  photos: any[] = [];
  selectedPhoto: any = null;
  showRoverInfo = false;
  showPhotos = false;
  solInput: number = 1000;

  constructor(private marsService: Myservice) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.marsService.getMarsPhotos().subscribe((data) => {
      this.photos = data.photos;
      this.selectedPhoto = this.photos.length > 0 ? this.photos[0] : null;
    });
  }

  toggleRoverInfo() {
    this.showRoverInfo = true;
    this.showPhotos = false;
    if (this.photos.length === 0) this.fetchData();
  }

  togglePhotos() {
    this.showPhotos = true;
    this.showRoverInfo = false;
    if (this.photos.length === 0) this.fetchData();
  }
  selectedImage: string | null = null;
}
