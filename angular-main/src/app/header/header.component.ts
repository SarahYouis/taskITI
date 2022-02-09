import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  confirmLogout: boolean = false;
  constructor(private authService: AuthService,
              private router: Router) {
    this.userName = this.authService.getUserName();
  }

  ngOnInit(): void {

    this.authService.getLoggedName().subscribe(name => {
      this.userName = name
    })
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/products']);
  }

}
