import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  ContactForm: FormGroup;
  Error: string = '';
  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.ContactForm = this.formBuilder.group({
      Nombre: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Correo: new FormControl('', Validators.compose([
        Validators.required, Validators.email
      ])),
      Mensaje: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

  ngOnInit(): void {
  }

  GetValidError(): boolean {
    let error = false;
    for (const [key, value] of Object.entries(this.ContactForm.controls)) {
      
      error = (value.invalid && (value.dirty || value.touched))

      if (error && value.errors) {
        for (const [errorName, valor] of Object.entries(value.errors)) {
          if (valor) {
            switch (errorName) {
              case 'required':
                this.Error = `${key} es requerido`
                break;
              case 'email':
                this.Error = `${key} no es válido`
                break;

              default:
                this.Error = `${key} no es válido`
                break;
            }
          }
        }
        break;
      }
    }
    return error;
  }

  SendMessage() {
    console.log(this.ContactForm.value)
  }

}
