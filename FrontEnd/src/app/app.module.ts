import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { rootApp } from './app.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    rootApp,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [rootApp]
})
export class AppModule { }
