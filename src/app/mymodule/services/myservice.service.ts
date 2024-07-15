import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyModule } from '../mymodule';

@Injectable({
  providedIn: MyModule,
})
export class MyService {
  getRandomValue() {
    return Math.random();
  }

  constructor(private httpClient: HttpClient) {}

  request(data: { [key: string]: string }) {
    return this.httpClient.post(`http://localhost:3000/`, data);
  }
}
