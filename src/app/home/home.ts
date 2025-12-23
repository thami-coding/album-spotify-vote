import { Component } from '@angular/core';
import { Search } from '../search/search';
import { Genres } from '../genres/genres';
import { ArtistsList } from '../artists-list/artists-list';
import { RouterOutlet } from '@angular/router';
import { SideNav } from "../side-nav/side-nav";

@Component({
  selector: 'app-home',
  imports: [Search, Genres, ArtistsList, RouterOutlet, SideNav],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
