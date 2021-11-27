import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cqbp-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
