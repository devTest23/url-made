import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { UrlShortner } from './url-short.model';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss'],
})
export class UrlShortnerComponent implements OnInit {
  url!: string;
  newUrl!: string;
  hideUrl: boolean = false;
  showSpinner: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.hideUrl = false;
    this.showSpinner = true;

    let req: UrlShortner = {
      url: this.url,
    };

    setTimeout(() => {
      this.api.shortUrl(req).subscribe(
        (res: any) => {
          console.log(res);
          if (res.isSuccess) {
            this.url = '';
            this.newUrl =
              window.location.protocol +
              '//' +
              window.location.hostname +
              ':' +
              window.location.port +
              '/' +
              res.result.shortId;

            this.hideUrl = true;
            this.showSpinner = false;
          }
        },
        (err) => {
          console.log(err);
          this.hideUrl = false;
        }
      );
    }, 2000);
  }

  openUrl() {
    window.open(this.newUrl);
  }
}
