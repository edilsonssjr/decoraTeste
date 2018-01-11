import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, search: any): any {
    if(search === undefined) return users;
    return users.filter(function(user){
      return user.email.toLowerCase().includes(search.toLowerCase());
    })
  }

}
