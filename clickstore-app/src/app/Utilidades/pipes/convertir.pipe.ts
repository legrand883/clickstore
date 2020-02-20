import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertir'
})
export class ConvertirPipe implements PipeTransform {

  transform(value: string, args: string): any 
  {
    if (!args)
    {
      return value.toLocaleUpperCase();
    }else
        {
          if (args == 'M')
          {
            return value.toLocaleUpperCase();
          }else if(args == 'm')
              {
                return value.toLocaleLowerCase();
              }
        }
    return null;
  }

}
