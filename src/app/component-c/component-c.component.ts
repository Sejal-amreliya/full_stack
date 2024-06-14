import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent {
  // Array to hold the list of users
  users: any[] = [];

  constructor(private userService: UserService) {}

  // Load users when the component initializes
  ngOnInit(): void {
    this.loadUsers();
  }

  // Load users from the service and map them to include an 'editing' flag
  loadUsers(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users.map(user => ({ ...user, editing: false }));
    });
  }

  // Add a new user
  addUser(user: any): void {
    this.userService.addUser(user).subscribe(data => {
      if (data) {
        this.userService.getUsers().subscribe(data => this.users = data);
      }
    });
  }

  // Modify user details
  editUser(updatedUser: any): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  // Delete a user by ID
  deleteUser(id: any): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  // Generate a PDF and open it in a new tab
  generatePdf(): void {
    this.userService.generatePdf().subscribe((data: any) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  // Generate a PDF and download it
  downloadPdf(): void {
    this.userService.generatePdf().subscribe((data: any) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'users.pdf';
      link.click();
    });
  }
}
