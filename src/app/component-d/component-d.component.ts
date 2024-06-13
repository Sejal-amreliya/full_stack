import { Component } from '@angular/core';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.scss']
})
export class ComponentDComponent {
  // constructor(private userService: UserServiceService) { }

  // ngOnInit(): void { }

  // generatePdf(): void {
  //   const users = this.userService.getUsers();
  //   const doc = new jsPDF();
  //   doc.text('Users List', 10, 10);
  //   users.forEach((user:any, index:any) => {
  //     doc.text(`${index + 1}. ${user.name} - ${user.email} - ${user.phoneNumber} - ${user.address}`, 10, 20 + (index * 10));
  //   });
  //   doc.save('users-list.pdf');
  // }
}
