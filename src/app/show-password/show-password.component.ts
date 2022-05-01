import { Component, OnInit, DoCheck } from '@angular/core';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css'],
})
export class ShowPasswordComponent implements OnInit, DoCheck {
  password = '';
  constructor(private passwordService: PasswordService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.password = this.passwordService.password;
  }
}
