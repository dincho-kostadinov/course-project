import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(value: any, filter: string): any {
        if (filter) {
            filter = filter.toLowerCase();
            return value.filter(function (el: any) {
                return el.name.toLowerCase().indexOf(filter) > -1;

            })
        }
        return value;
    }
}

