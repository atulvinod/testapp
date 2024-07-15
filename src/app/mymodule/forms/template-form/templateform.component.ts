import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'myform',
  templateUrl: './templateform.template.html',
  styles: '',
})
export class MyForm {
  model = new Hero(0, '', '', '');
  constructor(private router: Router, private route: ActivatedRoute) {}
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.model);
  }

  goToReactiveForms() {
    this.router.navigate(['../reactive'], {
      relativeTo: this.route,
      state: { name: 'atul' },
    });
  }
}
