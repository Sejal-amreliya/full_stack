import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.scss']
})
export class ComponentDComponent {
 user!:[];

  constructor(private userService: UserService) {}

  // Generate a PDF and open it in a new tab
  generatePdf(): void {
    this.userService.generatePdf().subscribe((data:any) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });  }
}
