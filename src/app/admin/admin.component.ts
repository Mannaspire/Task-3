import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  vendorproductdata: any;
  userid: any;

  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.userid = sessionStorage.getItem('username');
    this.vendorproduct();
  }

  vendorproduct() {
    this.api.getVendor().subscribe((res: any) => {
      console.log(res);
      this.vendorproductdata = res;
    })
  }

  approveproduct(data: any) {
    data['isApproved'] = true;
    this.api.updateVendor(data, data.id).subscribe(res => {
      console.log("Updated Successfully");
    })
  }

  deleteproduct(product: any) {
    this.api.deleteVendor(product.id).subscribe(res => {
      console.log("Deleted Successfully");
      this.vendorproduct();
    })
  }
}
