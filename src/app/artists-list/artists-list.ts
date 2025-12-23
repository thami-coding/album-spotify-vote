import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artists-list',
  imports: [RouterLink],
  templateUrl: './artists-list.html',
  styleUrl: './artists-list.css',
})
export class ArtistsList {}
