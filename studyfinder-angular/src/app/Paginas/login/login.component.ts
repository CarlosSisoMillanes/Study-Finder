import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Aquí puedes manejar la lógica para enviar los datos del formulario al backend
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      // Ejemplo de impresión en la consola
      console.log(this.loginForm.value);
    } else {
      // Si el formulario es inválido, puedes mostrar un mensaje de error o realizar otra acción
      console.log('El formulario no es válido');
    }
  }
}
