import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { ISSTracker } from './components/iss-tracker/iss-tracker';
import { Launches } from './components/launches/launches';
import { MarsMissions } from './components/mars-missions/mars-missions';
import { SpacePhotos } from './components/space-photos/space-photos';
import { NotFoundError } from '@angular/core/primitives/di';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'Iss-tracker', component: ISSTracker },
  { path: 'launches', component: Launches },
  { path: 'mars-mission', component: MarsMissions },
  { path: 'space-photos', component: SpacePhotos },
  { path: '**', component: NotFoundError },
];
