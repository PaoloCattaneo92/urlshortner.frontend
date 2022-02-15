import { Component } from '@angular/core';
import { debounce } from 'rxjs';
import { UrlShort } from './model/urlshort.model';
import { UrlshortService } from './services/urlshort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'URLShortner - Paolo Cattaneo';
  
}
