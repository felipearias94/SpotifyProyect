import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  constructor(private spotify: SpotifyService) { }
  
  /*getFavorites(){
    let songStorage = this.spotify.getFavorites();
    this.spotify.array
  }*/

}
