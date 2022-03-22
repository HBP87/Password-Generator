import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-generator';
  parameters: string = '';
  password: string = '';
  passwordLen: number = 15;

  generatePassword(parameter: { parameters: string; length: number }) {
    this.parameters = parameter.parameters;
    this.password = '';
    this.passwordLen = parameter.length;
    for (var i = 0; i < this.passwordLen; i++) {
      var randomNumber = Math.floor(Math.random() * this.parameters.length);
      this.password += this.parameters.substring(
        randomNumber,
        randomNumber + 1
      );
    }
  }
}
