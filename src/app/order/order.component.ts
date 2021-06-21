import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

export interface UsersData {
  id: any;
  orderDate: any;
  name: any;
  mobile: any;
  address: any;
  quantity: any;
}
const ELEMENT_DATA: UsersData[] = [
  { id: 1, name: 'Madhuja', mobile: 956000000, address: 'delhi', orderDate:12062021 , quantity: 5 },
  { id: 2, name: 'mitra', mobile: 956000000, address: 'punjab', orderDate: 12062021, quantity: 5 },
  { id: 3, name: 'priyal', mobile: 956000000, address: 'bangalore', orderDate: 12062021, quantity: 5 },
  { id: 4, name: 'disha', mobile: 956000000, address: 'pune', orderDate: 12062021, quantity: 5 },
  { id: 5, name: 'rahul', mobile: 956000000, address: 'kashmir', orderDate: 12062021, quantity: 5 },
  { id: 6, name: 'Vineet', mobile: 956000000, address: 'kolkata', orderDate: 12062021, quantity: 5 },
];


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  displayedColumns: string[] = ['id', 'orderDate', 'name', 'mobile', 'address', 'quantity', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    public dialog: MatDialog) {

  }

  openDialog(action, obj) {

    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: obj

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {

    var d = new Date();
    this.dataSource.push({
      id: row_obj.id,
      orderDate: row_obj.orderDate,
      name: row_obj.name,
      mobile: row_obj.mobile,
      address: row_obj.address,
      quantity: row_obj.quantity,
    });
    this.table.renderRows();

  }
  updateRowData(row_obj) {

    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.orderDate = row_obj.orderDate;
        value.name = row_obj.name;
        value.mobile = row_obj.mobile;
        value.address = row_obj.address;
        value.quantity = row_obj.quantity;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {

    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }
}