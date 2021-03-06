import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-reports',
  templateUrl: './poll-reports.component.html',
  styleUrls: ['./poll-reports.component.css']
})
export class PollReportsComponent implements OnInit {
data: any;
constructor() {
  this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
    };
}

  ngOnInit() {
  }

}
