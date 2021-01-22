import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableDataClass'
})
export class TableDataClassPipe implements PipeTransform {

  transform(classCompare: string, data: any): string {
    switch (classCompare) {
      case 'season':
        return 'season-' + data;
      case 'cw-rank':
        if (data <= 60) {
          return 'great-container';
        } else if (data <= 106) {
          return 'good-container';
        } else if (data <= 127) {
          return 'alright-container dark-gray-text';
        }
        return 'bad-container';
      case 'rebels-rank':
        if (data === 0) {
          return 'uncategorized-container';
        } else if (data <= 31) {
          return 'great-container';
        } else if (data <= 59) {
          return 'good-container';
        } else if (data <= 73) {
          return 'alright-container dark-gray-text';
        }
      default:
        return '';
    }
  }
}
