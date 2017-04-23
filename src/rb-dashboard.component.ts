import { Component } from '@angular/core';
import { RbListService } from 'rb-list-service';

@Component({
  selector: 'rb-dashboard-component',
  templateUrl: './rb-dashboard.component.html'
})
export class RbDashboardComponent {

  constructor(private rbListService: RbListService) {
  }

}
