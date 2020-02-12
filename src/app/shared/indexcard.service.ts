import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Indexcard } from '../_interface/indexcard.model';

/**
 * Service for handling Indexcards.
 */
@Injectable({
  providedIn: 'root'
})
export class IndexcardService {
  /**
   * Constructor.
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * Get all indexcards.
   */
  public getIndexcards = () => {
    return this.http.get<Indexcard[]>(this.createCompleteRoute('todos', environment.urlAddress));
  };

  /**
   * Get a specific indexcard.
   * @param id id of an indexcard
   */
  public getIndexcard(id: string) {
    return this.http.get<Indexcard>(this.createCompleteRoute(`todos/${id}`, environment.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  };
}
