import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './pages/main/main.component';
import {ExploreComponent} from './pages/explore/explore.component';
import {DownloadComponent} from './pages/download/download.component';
import {TestComponent} from './pages/test/test.component';

const routes: Routes = [
  { path: '*', component: MainComponent},
  { path: 'main', component: MainComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: []
})
export class AppRoutingModule {}
