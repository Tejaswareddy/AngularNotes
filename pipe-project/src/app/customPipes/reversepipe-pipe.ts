import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversepipe',
  standalone: true   
})
export class ReversepipePipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.split('').reverse().join('') : '';
  }

}