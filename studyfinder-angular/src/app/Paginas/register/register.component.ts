import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../services/serviceUser/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,public userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      apellidos: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
      console.log(this.registerForm.value);
    this.reg();
  }

  reg() {
    const nombre = this.registerForm.value.email;
    const apellidos = this.registerForm.value.email;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;


    const token = this.userService.register(nombre ,apellidos ,email, password).subscribe({
      next: value => console.log(value),
      error: err => alert(err)
    });
    console.log(token);
  }

}
