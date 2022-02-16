import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { MainComponent } from './main/main.component';
import {AnalogyBoardComponent} from '../analogy-bord/analogy-board.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExploreComponent} from './explore/explore.component';
import { TestComponent } from './test/test.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  { path: '**', component: MainComponent },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'}),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    MainComponent,
    ExploreComponent,
    AnalogyBoardComponent,
    TestComponent,
    DownloadComponent
  ],
  exports: [
    MainComponent,
    ExploreComponent,
    AnalogyBoardComponent,
    RouterModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: document.getElementsByTagName('base')[0].href}]
})
export class PagesModule {}
