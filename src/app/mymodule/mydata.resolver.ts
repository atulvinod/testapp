import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class MyDataResolver implements Resolve<number> {

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<number> {
    return of( Math.random() ).pipe( delay( 2000 ) );
  }

}