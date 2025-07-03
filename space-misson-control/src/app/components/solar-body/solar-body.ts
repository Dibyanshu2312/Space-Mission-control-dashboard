import { Component } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-solar-body',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './solar-body.html',
  styleUrl: './solar-body.css',
  providers: [Myservice],
})
export class SolarBody {
  bodyId: string = '';
  body: any;
  loading = false;
  errorMsg = '';

  constructor(private myservices: Myservice) {}

  fetchBody() {
    if (!this.bodyId.trim()) return;

    this.loading = true;
    this.errorMsg = '';
    this.myservices.getStarInfo(this.bodyId.trim()).subscribe({
      next: (data) => {
        this.body = data;
        this.loading = false;
      },
      error: () => {
        this.errorMsg =
          'Body not found. Try names like "earth", "sun", "jupiter".';
        this.body = null;
        this.loading = false;
      },
    });
  }
}
