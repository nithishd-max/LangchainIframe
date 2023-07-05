import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    address: '',
    email: '',
    phone: '',
    github: ''
  };

  submitForm(): void {
    const emailSubject = 'Contact Form Submission';
    const emailBody = `
      Name: ${this.contactForm.name}
      Address: ${this.contactForm.address}
      Email: ${this.contactForm.email}
      Phone Number: ${this.contactForm.phone}
      GitHub Username: ${this.contactForm.github}
    `;

    const mailToLink = `mailto:kumarnithish0905@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailToLink;
  }
}
