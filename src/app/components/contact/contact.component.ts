import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service'; // Correct path to your service

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  // Inject ContactService in the constructor
  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pan_no: ['', Validators.required],
      adhaar_no: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.contactForm.valid) {
      const contactData = {
        createdAt: new Date().toISOString().split('T')[0],
        ...this.contactForm.value,
        status: true
      };
      this.contactService.createContact(contactData).subscribe(
        (response: any) => {
          console.log('Contact successfully created:', response);
          this.contactForm.reset();
        },
        (error: any) => {
          console.error('Error creating contact:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
