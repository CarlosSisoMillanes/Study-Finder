import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../services/serviceUser/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,public userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Aquí puedes manejar la lógica para enviar los datos del formulario al backend
    if (this.loginForm.valid) {

      console.log(this.loginForm.value);
      this.login();
    } else {
      // Si el formulario es inválido, puedes mostrar un mensaje de error o realizar otra acción
      console.log('El formulario no es válido');
    }
  }


  login() {

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;


    const token = this.userService.login(email, password).subscribe({
      next: value => console.log(value),
      error: err => alert(err)
    });
    console.log(token);
  }
}
