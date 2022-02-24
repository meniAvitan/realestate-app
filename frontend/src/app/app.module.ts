import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PropertyCardComponent } from './components/property/property-card/property-card.component';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './components/property/add-property/add-property.component';
import { PropertyDetailComponent } from './components/property/property-detail/property-detail.component';

const appRouts: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: '**', component: PropertyListComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
