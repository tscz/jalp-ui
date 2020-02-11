import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Indexcard } from '../_interface/indexcard.model';

@Injectable({
  providedIn: 'root'
})
export class IndexcardService {

  constructor(private http: HttpClient) { }

  public getData = (route: string) => {
    return this.http.get<Indexcard[]>(this.createCompleteRoute(route, environment.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
