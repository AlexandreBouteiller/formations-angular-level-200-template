import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { concatMap, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'game-count-click',
  templateUrl: './count-click.component.html',
  styleUrls: ['./count-click.component.css']
})
export class CountClickComponent implements OnInit, AfterViewInit {

  @ViewChild('myButton') button !: ElementRef
  private click$ !: Observable<any>

  constructor() { }
  ngAfterViewInit(): void {
    this.click$ = fromEvent(this.button.nativeElement, 'click')

    // Réinitialisation du compteur à chaque clic
    this.click$.pipe(
      switchMap(item => interval(500))
    ).subscribe(item => console.info('click', item))

    // Ajout d'un compteur à chaque clic
    /*this.click$.pipe(
      mergeMap(item => interval(500))
    ).subscribe(item => console.info('click', item))*/

    // Après le premier clic, les prochains clics n'ont aucun impact sur le compteur car dans interval(..) il n'y a jamais dans complete()
    /*this.click$.pipe(
      concatMap(item => interval(500))
    ).subscribe(item => console.info('click', item))*/
  }

  ngOnInit(): void {
  }

}
