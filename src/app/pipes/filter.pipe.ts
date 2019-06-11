import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(value: any, filter: string): any {
        if (filter === undefined || filter === 'all') {
            return value;
        }
        if (filter) {
            return value.filter(function (el: any) {
                return el.category.toLowerCase().indexOf(filter) > -1;

            })

        }

    }
}
