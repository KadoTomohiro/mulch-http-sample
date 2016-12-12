import { Component } from '@angular/core';
import {RegionRequestService} from "./region-request.service";
import HttpRequest = http.HttpRequest;
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private regionRequest: RegionRequestService) {
    this.regionRequest.getRegions();
  }

  get regions(): string[] {
    return this.regionRequest.regions();
  }
}
