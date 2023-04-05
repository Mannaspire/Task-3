import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: ApiService) { }

  ngOnInit(): void {

  }

  hidden() {
    if (this.service.isloggin() == true) {
      return true;
    }
    else {
      return false;
    }
  }

  onLogIn() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }

  onLogout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('username')
    this.router.navigate(['login'], { relativeTo: this.route });
  }

}
