import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './adminvendor.component.html',
  styleUrls: ['./adminvendor.component.css']
})
export class AdminvendorComponent implements OnInit {

  vendors: any;
  userid: any;
  constructor(private service: ApiService) { }

  // vendors:Vendor[] = vendorData;

  ngOnInit(): void {
    this.userid = JSON.parse(sessionStorage.getItem('user') || '')['username'];
    this.getvendor();
  }

  getvendor() {
    this.service.getAdminvendor(username).subscribe((res) => {
      console.log(res);
      this.vendors = res;
    })
  }

  deleteAdminvendor(vendor: any) {
    this.service.deleteAdminvendor(vendor.id).subscribe(res => {
      console.log("Deleted Successfully");
      this.getvendor();
    })
  }
}
function username(): any {
  throw new Error('Function not implemented.');
}

