import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MyService } from './services/myservice.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'my-component',
  templateUrl: './mycomponent.template.html',
  styles: ``,
  providers: [{ provide: 'LodaService', useClass: MyService }],
})
export class MyComponent implements OnInit, AfterViewInit {
  myName = 'atul vinod';
  value = 0;
  @ViewChild('myViewChild') meraViewChild!: ElementRef<HTMLDivElement>;

  constructor(@Inject('LodaService') private myService: MyService) {}

  ngOnInit(): void {
    console.log('Hello from myComponent ngOnInit');
  }
  showAlert() {
    alert('Hello world ' + this.myService.getRandomValue());
  }

  sendRequest() {
    this.myService
      .request({ message: 'value from application' })
      .pipe(
        catchError((err) => {
          return of('Handled error', JSON.stringify(err));
        })
      )
      .subscribe(
        (result) => alert(JSON.stringify(result)),
        (error) => alert(JSON.stringify(error))
      );
  }
  ngAfterViewInit(): void {
    // console.log(this.meraViewChild.nativeElement.textContent);
  }
}
