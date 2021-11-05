import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'game-rxjs-pipe-async',
  templateUrl: './rxjs-pipe-async.component.html',
  styleUrls: ['./rxjs-pipe-async.component.css']
})
export class RxjsPipeAsyncComponent implements OnInit, OnDestroy {
  public statResultOf$ !: Observable<number[]>
  private stopObservable$ = new Subject<boolean>()

  constructor() { }

  ngOnInit(): void {
    // Un seul next contenant le tableau en valeur
    this.statResultOf$ = of([1, 2, 3])

    // trois next contenant chacune chaque valeur successive du tableau
    from([1, 2, 3]).pipe(
      // Contnue la souscription tant stopObservable n'a pas eu de next
      tap(item => console.info('avant', item)),
      takeUntil(this.stopObservable$),
      tap(item => console.info('après', item))
    ).subscribe(item => console.info(item))
  }

  ngOnDestroy() : void {
    // Active le takeUntil avec un événement (Subject)
    this.stopObservable$.next(true)
    this.stopObservable$.unsubscribe()
  }

}
