import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-e',
  templateUrl: './component-e.component.html',
  styleUrls: ['./component-e.component.scss']
})
export class ComponentEComponent {
  constructor(private userService: UserService) { }

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
