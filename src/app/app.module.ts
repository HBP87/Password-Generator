import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowPasswordComponent } from './show-password/show-password.component';
import { PasswordParametersComponent } from './password-parameters/password-parameters.component';
import { FormsModule } from '@angular/forms';
import { PasswordService } from './password.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowPasswordComponent,
    PasswordParametersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [PasswordService],
  bootstrap: [AppComponent],
})
export class AppModule {}
