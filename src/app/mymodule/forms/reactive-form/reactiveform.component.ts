import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveform.template.html',
  styles: '',
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      console.log(navigation.extras.state);
    }
    const routeData = this.activatedRoute.snapshot.data;
    console.log(routeData);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      heroName: new FormControl(
        null,
        [
          Validators.required,
          // this.forbiddenNames,
        ],
        [this.asyncValidatorExample()]
      ),
      heroAlterEgo: new FormControl(null, [Validators.required]),
      heroPower: new FormControl(null, [Validators.required]),
      heroSkills: new FormArray([]),
    });
  }
  forbiddenNames(control: AbstractControl): ValidationErrors | null {
    if (control.value?.includes('naughty')) {
      return { naughty: true };
    }
    return null;
  }

  asyncValidatorExample(): AsyncValidatorFn {
    return (control): Observable<{ [key: string]: any } | null> => {
      if (control.value) {
        return new Observable((s) => {
          if (control.value == 'atul') {
            setTimeout(() => {
              s.next({ illegalName: true });
              s.complete();
            }, 1000);
          } else {
            s.next(null);
            s.complete();
          }
        });
      } else {
        return of(null);
      }
    };
  }
  onSubmit() {
    console.log('on submit');
    console.log(this.form.value);
  }

  get heroSkillInputs() {
    return (this.form.get('heroSkills') as FormArray).controls as FormControl[];
  }

  addNewHeroSkill() {
    (this.form.get('heroSkills') as FormArray).push(
      new FormControl(null, [Validators.required])
    );
  }
}
