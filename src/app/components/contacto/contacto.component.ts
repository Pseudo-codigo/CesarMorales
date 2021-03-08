import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from "../../services/email/email.service";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  ContactForm: FormGroup;
  Error: string = '';
  retractsAutomatically: boolean = false;
  element;
  sizeOfOne;
  sizeOfExtra


  constructor(
    public formBuilder: FormBuilder,
    public emailService: EmailService
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


    this.element = document.getElementById('Mensaje');
    this.sizeOfOne = this.element.clientHeight;
    this.element.rows = 2;
    this.sizeOfExtra = this.element.clientHeight - this.sizeOfOne;
    this.element.rows = 1;

    //modern
    if (this.element.addEventListener)
      this.element.addEventListener('input', this.Resize, false);
    //IE8
    else {
      this.element.attachEvent('onpropertychange', this.Resize)
      this.retractsAutomatically = true;
    }
  }

  Resize = () => {
    var length = this.element.scrollHeight;

    if (this.retractsAutomatically) {
      if (this.element.clientHeight == length)
        return;
    }
    else {
      this.element.rows = 1;
      length = this.element.scrollHeight;
    }

    this.element.rows = 1 + (length - this.sizeOfOne) / this.sizeOfExtra;
  }

  GetValidError(): boolean {
    let error = false;
    for (const [key, value] of Object.entries(this.ContactForm.controls)) {

      error = ((value.invalid && (value.dirty || value.touched)) && !this.emailService.sent)

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
    debugger;
    if (!this.emailService.sent && this.ContactForm.valid) {
      this.emailService.PostEmail(this.ContactForm.value).subscribe(
        (res) => {
          this.emailService.sent = true;
        },
        (error) => {
          console.error(error);
        }
      );
    }
    else {
      this.emailService.chill = true;
    }
  }

}
