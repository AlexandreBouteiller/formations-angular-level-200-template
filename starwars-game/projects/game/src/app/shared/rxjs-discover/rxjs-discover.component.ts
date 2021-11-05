import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'game-rxjs-discover',
  templateUrl: './rxjs-discover.component.html',
  styleUrls: ['./rxjs-discover.component.css']
})
export class RxjsDiscoverComponent implements OnInit, OnDestroy {
  private subscription = new Subscription()

  constructor() { }

  ngOnInit(): void {
    // PROMISE
    const callApi = new Promise((resolve, reject) => {
      console.info('Je suis une Promise')
      // Seul le premier resolve est retourné, même en appelant plusieurs fois la promise
      setTimeout(() => {
        resolve('retour Promise')
      }, 1500)
      // resolve('retour 2 Promise')
    })

    // S'exécute en asynchrone, donc à la fin du thread principal, après les observables !!
    callApi.then(item => console.info('promise', item)).then(item => console.info('?', item))
    callApi.then(item => console.info('promise2', item))

    // OBSERVABLE
    // On suffixe une variable d'observable par $
    const callApi$ = new Observable(observer => {
      console.info('Je suis une Observable', Math.round(Math.random() * 1000))

      // Au premier subscribe, le premier observer est retourné,
      // Au deuxième, c'est le 2ème qui est retourné
      observer.next('retour 1 Observable')
      observer.next('retour 2 Observable')

      // erreur observable
      // observer.error('fail')

      // Empêche les prochaines next "(comme un break)"
      observer.complete()

      // Le setTimeout est asynchrone, donc à la fin que le thread ait construit le composant
      setTimeout(() => {
        observer.next('retour 3 Observable')
      }, 1500)
    })

    // Exécution synchrone
    const unsbscribed = callApi$.subscribe(item => console.info('observable', item))
    this.subscription.add(unsbscribed)
    callApi$.subscribe(item => console.info('observable2', item),
      null,
      () => {
        console.warn('this is the end of Observable')
    })
  }

  ngOnDestroy(): void {
    // A faire absolument, stoope la souscription lors de la destruction du composant, sinon l'observable existe toujours !!!
    this.subscription.unsubscribe()
    console.log(this.subscription.closed)
  }

}
