import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateTolistusers(){
    this.router.navigate(['/user-list']);
  }
  navigateToaddusers(){
    this.router.navigate(['/user-form']);
  }
  navigateTooptimization(){
    this.router.navigate(['/performance']);
  }
  navigateToprivileges(){
    this.router.navigate(['/privileges']);
  }

}
