import { Injectable } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';

// export class Logger2 {
//   log(message: string, obj ?: any) {
//     if (!environment.production) {
//       console.error(message, obj)
//     }
//   }
// }

@Injectable({
  providedIn: 'root',
  // useValue: {
  //   log(message: string, obj ?: any) {}
  // },
  // useClass: Logger2
})
export class LoggerService {

  constructor() { }

  log(message: string, obj ?: any) {
    if (!environment.production) {
      console.info(message, obj)
    }
  }
}


