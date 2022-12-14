import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Search'
})

export class SearchPipe implements PipeTransform {
  
  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.fullname.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}


