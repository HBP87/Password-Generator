import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-password-parameters',
  templateUrl: './password-parameters.component.html',
  styleUrls: ['./password-parameters.component.css'],
})
export class PasswordParametersComponent implements OnInit {
  len: number = 6;
  useLowercase = true;
  useUppercase: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  constructor(private passwordService: PasswordService) {}

  ngOnInit(): void {}
  createParameterString() {
    let parameterString = '';
    if (this.useLowercase) {
      parameterString += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (this.useUppercase) {
      parameterString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.useNumbers) {
      parameterString += '123456789';
    }
    if (this.useSymbols) {
      parameterString += '@!#$%_()';
    }
    return parameterString;
  }
  setParameters() {
    let parameterString = this.createParameterString();
    this.passwordService.parameters = parameterString;
    this.passwordService.length = this.len;
    this.passwordService.generatePassword();
  }
}
