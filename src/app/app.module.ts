import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/store.module';

import { AppComponent } from './app.component';
import { InputCardComponent } from './components/input-card/input-card.component';
import { HomeComponent } from './components/home/home.component';
import { InputPanelComponent } from './components/input-panel/input-panel.component';
import { PickedTilesComponent } from './components/picked-tiles/picked-tiles.component';
import { PickedTilesContainerComponent } from './components/picked-tiles-container/picked-tiles-container.component';

@NgModule({
  declarations: [
    AppComponent,
    InputCardComponent,
    HomeComponent,
    InputPanelComponent,
    PickedTilesComponent,
    PickedTilesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRippleModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    AppStoreModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
