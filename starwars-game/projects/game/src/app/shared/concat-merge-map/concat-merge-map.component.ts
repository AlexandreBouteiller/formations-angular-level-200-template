import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'game-concat-merge-map',
  templateUrl: './concat-merge-map.component.html',
  styleUrls: ['./concat-merge-map.component.css']
})
export class ConcatMergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const getDataFromApi = (identifiant: number) => {
      return of(`element de mon api avec identifiant : ${identifiant}`).pipe(
        delay(1500)
      )
    }

    // A ne pas faire !!
    from([10, 20, 30, 40]).pipe(
      map(id => getDataFromApi(id))
    ).subscribe(item => item.subscribe(item2 => console.info('Sans concatMap => item', item2)))

    // A faire, le concatMap est exécuté après chaque next, attente de 1.5 seconde entre chaque résultat
    from([10, 20, 30, 40]).pipe(
      concatMap(id => getDataFromApi(id))
    ).subscribe(item => console.info('Avec concatMap => item', item))

    // A faire, le mergeMap est exécuté après le complete, attente de 1.5 secondes avant d'avoir l'ensemble des résultats
    from([10, 20, 30, 40]).pipe(
      mergeMap(id => getDataFromApi(id))
    ).subscribe(item => console.info('Avec mergeMap => item', item))

    // Switch Map récupère le dernier next
    from([10, 20, 30, 40]).pipe(
      switchMap(id => getDataFromApi(id))
    ).subscribe(item => console.info('Avec switchMap => item', item))
  }

}
