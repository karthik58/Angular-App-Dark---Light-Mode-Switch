import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWithPipe'
})
export class StartsWithPipePipe implements PipeTransform {

  transform(value: any, query: string, field: string): any {
    return query ? value.reduce((prev, next) => {
      if (next[field].includes(query)) { prev.push(next); }
      return prev;
    }, []) : value;
  }

}
