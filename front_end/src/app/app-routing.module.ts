import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'search/:query', component: SearchResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
