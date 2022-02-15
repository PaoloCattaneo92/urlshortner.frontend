import { Component, OnInit } from '@angular/core';
import { UrlShort } from '../model/urlshort.model';
import { UrlshortService } from '../services/urlshort.service';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  urlShort : UrlShort | undefined

  constructor(private urlShortService: UrlshortService) { }

  ngOnInit(): void {
    var key = window.location.pathname
    key = key.substring(1)

    this.urlShortService.getUrl(key)
    .then(res => {
      if(!res) {
        window.location.pathname = "not-found"
        return
      }
      
      if(new Date(res?.expirationTime).getTime() > new Date().getTime()) {
        window.location.href = res.url;
      }
      else {
        window.location.pathname = "not-found"
      }
    })
    // .finally(() => {
    //   window.location.pathname = "not-found"
    // })
  }

}
