import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contarletras'
})
export class ContarletrasPipe implements PipeTransform {

  transform(value: string, args: any): any 
  {
    
    if (!args)
    {
      return value.split(" ").length;
    }
    return null;
  }

}
