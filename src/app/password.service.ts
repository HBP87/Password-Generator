import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  parameters: string;
  length: number;
  passwordLen: number;
  password: string;

  generatePassword() {
    this.password = '';
    for (var i = 0; i < this.length; i++) {
      var randomNumber = Math.floor(Math.random() * this.parameters.length);
      this.password += this.parameters.substring(
        randomNumber,
        randomNumber + 1
      );
    }
  }
}
