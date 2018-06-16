import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatProgressSpinnerModule , MatListModule, MatExpansionModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';

import { ChartComponent } from './charts/chart.component';
import { MervalComponent } from './charts/merval.component';

const appRoutes: Routes = [
  { path: 'chart', component: ChartComponent },
  { path: 'merval', component: MervalComponent },
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
    //Material
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
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
