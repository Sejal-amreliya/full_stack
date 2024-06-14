import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent {
  form!: FormGroup;

  //Output EventEmitter to emit the form data when submitted
  @Output() userAdded = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private userService: UserService) {
    // Form with FormBuilder and set up validation rules
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    // Check if the form is valid
    if (this.form.valid) {
      // Emit the form value using the userAdded EventEmitter
      this.userAdded.emit(this.form.value);
      // Reset the form after submission
      this.form.reset();
    }
  }
}