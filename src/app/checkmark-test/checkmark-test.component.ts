import { Component } from '@angular/core';

@Component({
  selector: 'app-checkmark-test',
  templateUrl: './checkmark-test.component.html',
  styleUrls: ['./checkmark-test.component.css']
})
export class CheckmarkTestComponent {
  isChecked = false;

  count = 0

  triggerChange(){
    this.count = this.count + 1
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

}
