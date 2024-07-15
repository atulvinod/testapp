import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'clientPipe',
})
export class ClientDataPipe implements PipeTransform {
  transform(input: any): Observable<any> {
    return new Observable((subscriber) => {
      subscriber.next('Loading');
      setTimeout(() => {
        subscriber.next(Math.random() * input);
        subscriber.complete();
      }, 2000);
    });
  }
}
