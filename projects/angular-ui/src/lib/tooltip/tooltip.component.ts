import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'au-tooltip',
  template: `
    <p>
      tooltip works!
    </p>
  `,
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
