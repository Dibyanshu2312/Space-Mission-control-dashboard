import { Component } from '@angular/core';
import { Myservice } from '../../services/myservice';
import { CommonModule } from '@angular/common';
import { MarsMissions } from '../mars-missions/mars-missions';
import { MarsWeather } from '../mars-weather/mars-weather';
import { MissionDetail } from '../mission-detail/mission-detail';
import { SolarBody } from '../solar-body/solar-body';
import { LatestLaunch } from '../latest-launch/latest-launch';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MarsWeather, MissionDetail, SolarBody, LatestLaunch],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  providers: [Myservice],
})
export class Dashboard {
  constructor(private myserivce: Myservice) {}
}
