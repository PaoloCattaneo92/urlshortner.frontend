import { Component, OnInit } from '@angular/core';
import { UrlShort } from '../model/urlshort.model';
import { UrlshortService } from '../services/urlshort.service';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css']
})
export class ShortenComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private urlShortService: UrlshortService) { }

  public shorten() {

    var url = (<HTMLInputElement>document.getElementById("inUrl")).value;

    (<HTMLInputElement>document.getElementById("outUrl")).value = "(encoding)"

    this.urlShortService.insertUrl(url)
    .then(res => {

      if(res != null) {
        //alert("received: " + this.urlShort.key + ":" + this.urlShort.url);
        (<HTMLInputElement>document.getElementById("outUrl")).value = res?.key
      }
      else {
        (<HTMLInputElement>document.getElementById("outUrl")).value = "(ERROR)"
      }
    })
  }

}
