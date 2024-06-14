import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-f',
  templateUrl: './component-f.component.html',
  styleUrls: ['./component-f.component.scss']
})
export class ComponentFComponent {
  // Variable to hold the URL of the PDF
  pdfSrc!: string;

  constructor(private userService: UserService) {
    // Generate the PDF and set the URL for viewing
    this.userService.generatePdf().subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      this.pdfSrc = url;
    });
  }
}
