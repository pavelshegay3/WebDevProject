import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddressBarComponent } from './address-bar/address-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HomeComponent,
    ProductTileComponent,
    ProductDetailsComponent,
    AddressBarComponent,
    SearchResultsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
