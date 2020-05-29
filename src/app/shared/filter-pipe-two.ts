import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilterTwo'})
export class SearchFilterPipeTwo implements PipeTransform {
    transform(value: any, search: string): any {
         if  (!search) {return value; }
         let solution = value.filter(v => {
            if ( !v ) {return;}
            const aux = v.CITY_NAME;
           return  aux.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return solution;
    }
}