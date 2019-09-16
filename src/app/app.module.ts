import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistaComponent } from './components/artists/artists.component';
import { CardsComponent } from './components/cards/cards.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FavoritesComponent,
    ArtistaComponent,
    CardsComponent,
    LoadingComponent,
    SearchComponent,
    NoimagePipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
