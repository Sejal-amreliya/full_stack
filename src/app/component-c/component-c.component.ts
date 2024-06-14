import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent {
  users: any[] = [];

  constructor(private userService: UserService){}
  ngOnInit(): void {
  this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users.map(user => ({ ...user, editing: false }));
    });
  }
  addUser(user: any): void {
    // this.users.push({ ...user, id: this.users.length + 1 });
    this.userService.addUser(user).subscribe(data=>{
      if(data){
        this.userService.getUsers().subscribe(data=>this.users=data);

      }
    });

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
  generatePdf(){
    this.userService.generatePdf().subscribe((data:any) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
  downloadPdf(): void {
    this.userService.generatePdf().subscribe((data:any) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'users.pdf';
      link.click();
    });
  }
}
