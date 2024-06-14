import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent {
  // Input property to receive the list of users from the parent component
  @Input() users: any[] = [];

  // Output event emitters for generating and downloading PDFs
  @Output() generatePdf = new EventEmitter<void>();
  @Output() downloadPdf = new EventEmitter<void>();

  constructor(private userService: UserService) {}

  // Initialize component and load users from the service
  ngOnInit(): void {
    this.loadUsers();
  }

  // Load users from the service and map them to include an 'editing' flag
  loadUsers(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users.map(user => ({ ...user, editing: false }));
    });
  }

  // Enable editing mode for a user
  editUser(user: any): void {
    user.editing = true;
  }

  // Save changes made to a user and update the list of users
  saveUser(user: any): void {
    delete user.editing; 
    this.userService.editUser(user).subscribe(() => this.loadUsers());
  }

  // Cancel editing mode for a user
  cancelEdit(user: any): void {
    user.editing = false;
  }
  
  // Delete a user by ID and update the list of users
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  // Emit event to generate a PDF
  onGeneratePdf() {
    this.generatePdf.emit();
  }

  // Emit event to download a PDF
  onDownloadPdf(){
    this.downloadPdf.emit();
  }
}
