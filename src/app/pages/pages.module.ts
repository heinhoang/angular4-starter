import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRouter } from './pages.router';

@NgModule({
  imports: [
    CommonModule,
    PagesRouter
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
