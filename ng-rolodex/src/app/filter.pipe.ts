import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/core/src/util';
@Pipe({
  name: 'filter'

})
export class FilterPipe implements PipeTransform {
    
    transform(contacts: any[], searchText: string): any[] {
     
          console.log('transform', contacts)
        if(!contacts) return [];
        if(!searchText) return contacts;
        console.log('sear', searchText)
        searchText = searchText.toLowerCase();
        return contacts.filter( it => {
            let temp = it.name
            let cont = temp.toLowerCase();
            if (cont.includes(searchText)) {
                console.log('found', cont)
            }
            else {

                console.log('filter')
            }
          return cont.includes(searchText);
        });
    }
}