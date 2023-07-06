import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {APP_URL} from "../../helpers/constants";

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
  standalone: true
})
export class Error404Component implements OnInit {

  seconds = 5;
  private readonly router: Router = inject(Router);

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    setInterval(async () => {
      this.seconds--;
      if (this.seconds === 0) {
        await this.router.navigate([APP_URL.HOME]);
      }
    }, 1000);
  }

}
