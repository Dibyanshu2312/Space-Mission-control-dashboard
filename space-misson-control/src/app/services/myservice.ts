import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  getrockets() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  spaciphotosurl = 'https://api.nasa.gov/planetary/apod';
  spacephotokey = 'Y66V9q2b5PjLTBPsBBPsCzxiayJGDMcqFsUzDN7N';

  getApod(): Observable<any> {
    return this.http.get<any>(
      `${this.spaciphotosurl}?api_key=${this.spacephotokey}`
    );
  }

  getLaunches(): Observable<any> {
    return this.http.get<any>('https://api.spacexdata.com/v3/rockets');
  }
}
