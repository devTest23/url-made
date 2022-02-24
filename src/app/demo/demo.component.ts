import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  shortId!: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this.route.params.subscribe((queryParams) => {
      if (queryParams['id']) {
        this.shortId = queryParams['id'];
        this.getShortId(this.shortId);
      }
    });
  }

  ngOnInit(): void {}

  getShortId(id: string) {
    this.api.getUrl(id).subscribe((res: any) => {
      console.log(res);
      window.location.href = res.result.url;
    });
  }
}
