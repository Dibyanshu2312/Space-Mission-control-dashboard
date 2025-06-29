import { Component, OnInit } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { CommonModule, FormStyle } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-space-photos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './space-photos.html',
  styleUrl: './space-photos.css',
  providers: [Myservice],
})
export class SpacePhotos implements OnInit {
  constructor(private myserivce: Myservice) {}
  spacePhoto: any;
  ngOnInit(): void {
    this.myserivce.getApod().subscribe((data) => {
      console.log(data);
      this.spacePhoto = data;
    });
  }
}
