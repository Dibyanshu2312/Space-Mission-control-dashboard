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
  apikey = 'Y66V9q2b5PjLTBPsBBPsCzxiayJGDMcqFsUzDN7N';
  apikey2 = 'yWFbvKBOc6k6voYQKChwX8rfIqZ0lV87h6gMYeOc';
  marsmissionsurl =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=';
  BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed';

  getApod(): Observable<any> {
    return this.http.get<any>(`${this.spaciphotosurl}?api_key=${this.apikey}`);
  }

  getLaunches(): Observable<any> {
    return this.http.get<any>('https://api.spacexdata.com/v3/rockets');
  }

  getAllMissions(): Observable<any> {
    return this.http.get<any>('https://api.spacexdata.com/v3/missions');
  }

  getMarsPhotos(sol: number = 1000) {
    return this.http.get<any>(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=Y66V9q2b5PjLTBPsBBPsCzxiayJGDMcqFsUzDN7N'
    );
  }

  getAsteroids(start: string, end: string): Observable<any> {
    const url = `${this.BASE_URL}?start_date=${start}&end_date=${end}&api_key=${this.apikey}`;
    return this.http.get(url);
  }
}
