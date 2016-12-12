import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import HttpResponse = http.HttpResponse;
import {Observable} from "rxjs";

@Injectable()
export class RegionRequestService {

  constructor(private http: Http) {
  }

  _regions: string[];
  public getRegions(): void {
    this.http.get('../files/regions.json')
      .map((res: Response) => {
        let regions: string[] = res.json().regions;

        return regions.map((url: string) => {
          return this.http.get(`../files/${url}`);
        })
      })
      .flatMap(https => Observable.forkJoin(https))
      .subscribe(resps => {
        this._regions = resps.map(res => res.json().region)
      });
  }

  public regions(): string[] {
    return this._regions;
  }


}

