import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl(''),
});

onSubmit(){
  console.log(this.loginForm.value)
}
}
