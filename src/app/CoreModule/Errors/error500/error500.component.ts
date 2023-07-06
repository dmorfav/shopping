import {Component, inject, OnInit} from '@angular/core';
import {APP_URL} from "../../helpers/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-error500',
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.scss'],
  standalone: true
})
export class Error500Component implements OnInit {

  seconds = 3;
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
