import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logger } from 'projects/game/src/environments/logger-one';
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
    logger.log("Constructeur de ProfileService !!")
  }

  getAll(): Observable<UserBis[]> {
    // Le complete fait un next() puis un complete()
    return this.httpClient.get<ApiResult>('https://swapi.dev/api/people')
                  .pipe(map(item => {
                    // Le map créé un nouveau next()
                    // il faut bien unsubscribe à la fin
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
