import { Component } from '@angular/core';

import { RbListService } from 'rb-list-service';

@Component({
  selector: 'rb-dashboard-component',
  templateUrl: './rb-dashboard.component.html'
})
export class RbDashboardComponent {
  value: number;
  constructor(private rbListService: RbListService) {
  }
  getValue(gender) {
    var len = this.rbListService.items.length;
    var filteredItems = this.rbListService.items.filter((item) => item.gender === gender);
    return (filteredItems.length / len) * 100;
  }
}
