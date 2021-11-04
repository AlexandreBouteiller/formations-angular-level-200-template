import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Stat {

}

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Stat[]> {
    return this.httpClient.get<Stat[]>('une_url')
  }
}
