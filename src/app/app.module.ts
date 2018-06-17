import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, 
  MatProgressSpinnerModule , MatListModule, MatExpansionModule, MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';

import { ChartComponent } from './charts/chart.component';
import { MervalComponent } from './charts/merval.component';

const appRoutes: Routes = [
  { path: 'series', component: ChartComponent },
  { path: 'merval', component: MervalComponent },
  { path: '', redirectTo: '/series', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    //
    ChartComponent,
    MervalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //
    FormsModule,
    //Material
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    //Charts
    ChartsModule,
    //Http
    HttpClientModule,
    //
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
