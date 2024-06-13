import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-f',
  templateUrl: './component-f.component.html',
  styleUrls: ['./component-f.component.scss']
})
export class ComponentFComponent {
  pdfSrc!: string;

  constructor(private userService: UserService) {
    this.userService.generatePdf().subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      this.pdfSrc = url;
    });
  }
}
