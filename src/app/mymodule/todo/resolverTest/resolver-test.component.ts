import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component( {
  selector: "resolver-test",
  templateUrl: './resolver-test.component.html',
} )
export class ResolverTestComponent implements OnInit {
  resolvedIntegerValue: number = -1;

  constructor( private route: ActivatedRoute ) { }
  ngOnInit(): void {
    this.route.data.subscribe( ( data ) => {
      this.resolvedIntegerValue = data[ 'resolvedData' ];
    } )
  }


}