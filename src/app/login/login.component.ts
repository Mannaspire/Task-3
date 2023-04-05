import { HttpClient } from '@angular/common/http';
import { Component, Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  login!: boolean;

  vendor: any;

  // loginForm!: FormGroup;

  // loginObj: any = {
  //   username: '',
  //   password: ''
  // }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  // message!: string;

  constructor(private router: Router, private services: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  onLogin() {

    //1st Method
    // if(this.loginObj.username == 'admin' && this.loginObj.password == 'admin@123'){

    //   this.login=true;
    //   this.services.log(this.login);
    //   this.router.navigateByUrl('admin');

    // }
    // else if (this.loginObj.username == 'vendor1' && this.loginObj.password == 'vendor@1') {

    //   this.login=true;
    //   this.services.log(this.login);

    //   this.router.navigateByUrl('vendor')

    // } else {
    // }


    //2nd Method
    // this.http.get("http://localhost:3000/adminvendor").subscribe(res => {
    //   this.vendor = res;

    //   console.log(this.vendor);

    //   this.vendor.forEach((element: any) => {

    //     if (element.username == this.loginForm.value.username) {

    //       this.login = true;
    //       this.services.log(this.login);
    //       this.router.navigate(['/admin']);

    //     }

    //     else if (element.username == this.loginForm.value.username) {

    //       this.login = true;
    //       this.services.log(this.login);
    //       this.router.navigateByUrl('vendor');

    //     }

    //   });
    //   const userdata = (sessionStorage.setItem("userdata", JSON.stringify(this.vendor)));
    //   console.log(userdata);
    // })
    // "http://localhost:3000/adminvendor/?username=" + 


    //3rd Method
    if (this.loginForm.valid) {
      console.log("form submited");
      this.http.get("http://localhost:3000/adminvendor/?username=" + this.loginForm.value.username).subscribe(data => {

        this.vendor = data;
        console.log(this.vendor);

        console.log("1");

        if (this.vendor[0].username === this.loginForm.value.username) {

          console.log("2");
          console.log(this.vendor[0]);
          // sessionStorage.setItem('user', this.vendor[0]);
          // sessionStorage.setItem('username', this.vendor[0].username);

          if (this.vendor[0].role === 'admin') {

            this.login = true;
            this.services.login(this.vendor[0]);
            this.router.navigateByUrl('/admin/:id');
            console.log("Admin");


          }
          if (this.vendor[0].role === 'vendor') {

            this.login = true;
            this.services.login(this.vendor[0]);
            this.router.navigateByUrl('vendor/:id');
            console.log("Vendor");

          }
        }
        else {
          console.log("Error!!");
        }
      });
    }
  }
  // get username() {
  //   return this.loginForm.get('username');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }

}