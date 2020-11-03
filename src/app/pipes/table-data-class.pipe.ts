import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableDataClass'
})
export class TableDataClassPipe implements PipeTransform {

  transform(classCompare: string, data: any): string {
    switch (classCompare) {
      case 'season':
        return 'season-' + data;
      case 'rank':
        if (data <= 60) {
          return 'great-container';
        } else if (data <= 106) {
          return 'good-container';
        } else if (data <= 127) {
          return 'alright-container dark-gray-text';
        }
        return 'bad-container';
      default:
        return '';
    }
  }

}
