import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'top' })
export class FilterTopPipe implements PipeTransform {
    transform(value: any, filter: string): any {
        if (filter === undefined) {

            return value.sort(function (a, b) {
                return a.creationDate < b.creationDate ? 1 : a.creationDate > b.creationDate ? -1 : 0
            });
        }
        if (filter === 'newest') {
            return value.sort(function (a, b) {

                return a.creationDate < b.creationDate ? 1 : a.creationDate > b.creationDate ? -1 : 0
            });

        }
        if (filter === 'latest') {
            console.log('latest')
            return value.sort(function (a, b) {

                return a.lastUpdate < b.lastUpdate ? 1 : a.lastUpdate > b.lastUpdate ? -1 : 0
            });
        }

        if (filter === 'raiting') {
            return value.sort(function (a, b) {

                return ((a.overall.one * 1) + (a.overall.two * 2) + (a.overall.three * 3) + (a.overall.four * 4) + (a.overall.five * 5)) /
                    (a.overall.one + a.overall.two + a.overall.three + a.overall.four + a.overall.five) <
                    ((b.overall.one * 1) + (b.overall.two * 2) + (b.overall.three * 3) + (b.overall.four * 4) + (b.overall.five * 5)) /
                    (b.overall.one + b.overall.two + b.overall.three + b.overall.four + b.overall.five) ? 1 :
                    ((a.overall.one * 1) + (a.overall.two * 2) + (a.overall.three * 3) + (a.overall.four * 4) + (a.overall.five * 5)) /
                        (a.overall.one + a.overall.two + a.overall.three + a.overall.four + a.overall.five) >
                        ((b.overall.one * 1) + (b.overall.two * 2) + (b.overall.three * 3) + (b.overall.four * 4) + (b.overall.five * 5)) /
                        (b.overall.one + b.overall.two + b.overall.three + b.overall.four + b.overall.five) ? -1 : 0

            });
        }

    }
}
