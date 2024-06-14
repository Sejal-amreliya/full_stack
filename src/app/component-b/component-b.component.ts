import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent {
  @Input() users: any[] = [];
  @Output() generatePdf = new EventEmitter<void>();
  @Output() downloadPdf= new EventEmitter<void>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users.map(user => ({ ...user, editing: false }));
    });
  }
  editUser(user: any): void {
    user.editing = true;
  }

  saveUser(user: any): void {
    delete user.editing; 
    this.userService.editUser(user).subscribe(() => this.loadUsers());
  }

  cancelEdit(user: any): void {
    user.editing = false;
  }
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  onGeneratePdf() {
    this.generatePdf.emit();
  }
  onDownloadPdf(){
    this.downloadPdf.emit();
  }
}

