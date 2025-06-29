import { Component } from '@angular/core';
import { Myservice } from '../../services/myservice';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  providers: [Myservice],
})
export class Dashboard {
  constructor(private myserivce: Myservice) {}
}
