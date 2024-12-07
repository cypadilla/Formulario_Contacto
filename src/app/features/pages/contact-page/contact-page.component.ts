import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../../contact/contact-form/contact-form.component';
import { ContactService } from '../../../services/contact.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-contact-page',
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {

  users: User[] = [];
  loading = true; // Indicador de carga
  error: string | null = null;
  constructor(private contactService:ContactService){}

  ngOnInit(): void {
    this.contactService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los usuarios', err);
        this.error = 'No se pudo cargar la lista de usuarios.';
        this.loading = false;
      }
    });

    console.log(this.users)
  }

}
