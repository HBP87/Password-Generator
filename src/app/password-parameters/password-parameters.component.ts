import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-parameters',
  templateUrl: './password-parameters.component.html',
  styleUrls: ['./password-parameters.component.css'],
})
export class PasswordParametersComponent implements OnInit {
  @Output() onChange = new EventEmitter<{
    parameters: string;
    length: number;
  }>();

  len: number = 6;
  useLowercase = true;
  useUppercase: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  constructor() {}

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
  emit() {
    let parameterString = this.createParameterString();
    this.onChange.emit({ parameters: parameterString, length: this.len });
  }
}
