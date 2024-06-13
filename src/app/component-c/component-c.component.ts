import { Component } from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent {
  users: any[] = [];

  addUser(user: any): void {
    this.users.push({ ...user, id: this.users.length + 1 });
  }

  editUser(updatedUser: any): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id:any): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
