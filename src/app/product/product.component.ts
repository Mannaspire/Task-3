import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  vendorproductdata: any;

  constructor(private apiproduct: ApiService) { }

  ngOnInit(): void {
    this.vendorproduct();
  }

  vendorproduct() {
    this.apiproduct.getVendor().subscribe((res: any) => {
      console.log(res);
      this.vendorproductdata = res;
    })
  }

}
