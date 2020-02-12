import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Indexcard } from '../_interface/indexcard.model';

@Injectable({
  providedIn: 'root'
})
export class IndexcardService {
  constructor(private http: HttpClient) {}

  public getIndexcards = () => {
    return this.http.get<Indexcard[]>(this.createCompleteRoute('todos', environment.urlAddress));
  };

  public getIndexcard = (id: string) => {
    return this.http.get<Indexcard>(this.createCompleteRoute(`todos/${id}`, environment.urlAddress));
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  };
}
