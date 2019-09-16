import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';
import {CardsComponent } from '../cards/cards.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  song: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor( private router: Router, private spotify: SpotifyService ) {
    localStorage.removeItem('auth');
  }

      
  ngOnInit(){
    this.loading = true;
    this.error = false;
    this.login();
    this.spotify.getNewReleases()
        .subscribe( (data: any) => {

          console.log(data);
          this.song = data;
          this.loading = false;
        }, ( errorServicio ) => {

          this.loading = false;
          this.error = true;
          console.log(errorServicio);
          this.messageError = errorServicio.error.error.message;

        });
  }
  
  login() {
    const currentUrl = this.router.url.split('access_token=')[1];
    const token: string = currentUrl ? currentUrl.split('&')[0] : null;
    if (token) {
      localStorage.setItem('auth', token);
    } else {
      this.spotify.auth();
    }
  }

}