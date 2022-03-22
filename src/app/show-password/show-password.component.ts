import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css'],
})
export class ShowPasswordComponent implements OnInit {
  @Input('pass') password: string;
  // @ViewChild('copyText', { static: true }) copyText: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  // s
}
