import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('columns') columns: TableColumn[];
  @Input('tableData') tableData: any[];

  /* ----- Table Config ----- */
  public config: any;

  constructor() {
    this.config = {
      paging: true,
      sorting: { columns: this.columns },
      filtering: { filterString: '' },
      className: ['table-striped', 'table-bordered']
    };
  }

  ngOnInit(): void {}
}
