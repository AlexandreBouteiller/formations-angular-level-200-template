import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserBis } from '../../../core/models/user';

export declare type ApiResult = {
  results: [
    {
      name: string;
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  displayKey !:number

  constructor(private httpClient: HttpClient) {
    this.displayKey = Math.random()
  }

  getAll(): Observable<UserBis[]> {
    return this.httpClient.get<ApiResult>('https://swapi.dev/api/people')
                  .pipe(map(item => {
                    let array: UserBis[] = []
                    array = item.results.map(data => {
                      return {
                        pictureUrl: '',
                        surname: data.name,
                        weaponType: ''
                      }
                    })
                    return array
                  }))
  }
}
