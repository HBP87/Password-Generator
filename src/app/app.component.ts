import { Component } from '@angular/core';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-generator';

  password: string = '';
  constructor(private passwordService: PasswordService) {}
  generatePassword() {}
}
