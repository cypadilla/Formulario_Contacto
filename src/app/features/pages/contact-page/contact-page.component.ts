import { Component, OnInit } from '@angular/core';
// import { ContactFormComponent } from '../../contact/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  loading = true; // Indicador de carga
  error: string | null = null;
  constructor(){}

}
