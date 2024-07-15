import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyByValue',
})
export class MultiplyByValuePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const [factor] = args;
    return value * factor;
  }
}

