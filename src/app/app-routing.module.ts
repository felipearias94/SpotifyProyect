import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artists/artists.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistaComponent},            
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  //{path: '**', pathMatch: 'full', redirectTo: 'home'},
  {path: 'favorites', component: FavoritesComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
