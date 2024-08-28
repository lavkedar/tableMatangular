import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';

export interface UserData {
  name: string;
  age: number;
  gender: string;
  form: string;
  approver: string;
  status: string;
}

const ELEMENT_DATA: UserData[] = [
  { name: 'John Doe', age: 25, gender: 'Male', form: 'Form A', approver: 'Jane Smith', status: 'Approved' },
  { name: 'Anna Smith', age: 30, gender: 'Female', form: 'Form B', approver: 'John Doe', status: 'Pending' },
  // Add more data as needed
];


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  displayedColumns: string[] = ['select', 'name', 'age', 'gender', 'form', 'approver', 'status', 'action'];
  dataSource = ELEMENT_DATA;
  selection = new SelectionModel<UserData>(true, []);
  isTopLevelChecked = false;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.isTopLevelChecked = false;
    } else {
      this.dataSource.forEach(row => this.selection.select(row));
      this.isTopLevelChecked = true;
    }
  }

  checkboxLabel(row?: UserData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name}`;
  }

  approve(element: UserData) {
    console.log('Approved:', element);
    // Implement your approve logic here
  }

  cancel(element: UserData) {
    console.log('Cancelled:', element);
    // Implement your cancel logic here
  }

  approveAll() {
    console.log('Approved all selected');
    // Implement your bulk approve logic here
  }

  cancelAll() {
    console.log('Cancelled all selected');
    // Implement your bulk cancel logic here
  }
}
