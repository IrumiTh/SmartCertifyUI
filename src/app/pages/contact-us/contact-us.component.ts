import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  formValidity = signal(false);
  userId=0;
  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });

    this.contactForm.statusChanges.subscribe({
      next: (status) => {
        this.formValidity.set(status === 'VALID');
      },
    });
  }

  ngOnInit(): void {
  }

  triggerError() {
    // Simulate a non-HTTP error
    throw new Error('This is a simulated error');
  }

  onSubmit() {
    if (this.contactForm.valid) {
    
    }
  }
}