import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { VendorModel } from './vendor.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  formvalue !: FormGroup;

  vendorModelObj : VendorModel = new VendorModel();
  // api: any;
  vendorproductdata: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  userid: any;

  constructor(private formbuilder : FormBuilder,private api:ApiService){}
  
  ngOnInit(): void {

    this.userid = sessionStorage.getItem('username');

      this.formvalue = this.formbuilder.group({
        fname : [''],
        img : [''],
        desc : [''],
        price : [''],
        category : [''],
        vendorname : ['']
      })
      this.getAllData();
  }

  AddProduct(){
    this.formvalue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postVendorDetails(){
    this.vendorModelObj.fname = this.formvalue.value.fname;
    this.vendorModelObj.img = this.formvalue.value.img;
    this.vendorModelObj.desc = this.formvalue.value.desc;
    this.vendorModelObj.price = this.formvalue.value.price;
    this.vendorModelObj.category = this.formvalue.value.category;
    this.vendorModelObj.vendorname = this.userid;

    this.api.postVendor(this.vendorModelObj).subscribe((res: any)=>{
      console.log(res);
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getAllData();
    },
    // console.error()
    )
  }

  getAllData(){
    const user=JSON.parse(sessionStorage.getItem('user') || "");
    console.log(user[0].id);
    this.api.getProductById(user[0].username).subscribe(res=>{
      this.vendorproductdata = res;
    })
  }

  deleteProduct(row : any){
    this.api.deleteVendor(row.id).subscribe(res=>{
      console.log("Deleted Successfully");
      this.getAllData();
    })
  }

  onEditProduct(row:any){

    this.showAdd=false;
    this.showUpdate=true;

    this.vendorModelObj.id = row.id;
    this.formvalue.controls['fname'].setValue(row.fname);
    this.formvalue.controls['img'].setValue(row.img);
    this.formvalue.controls['desc'].setValue(row.desc);
    this.formvalue.controls['price'].setValue(row.price);
    this.formvalue.controls['category'].setValue(row.category);
    this.formvalue.controls['vendorname'].setValue(row.vendorname);

  }

  updateProductData(){
    this.vendorModelObj.fname=this.formvalue.value.fname;
    this.vendorModelObj.img=this.formvalue.value.img;
    this.vendorModelObj.desc=this.formvalue.value.desc;
    this.vendorModelObj.price=this.formvalue.value.price;
    this.vendorModelObj.category=this.formvalue.value.category;

    this.api.updateVendor(this.vendorModelObj,this.vendorModelObj.id).subscribe(res=>{
      console.log("Updated Successfuly"); 
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getAllData();
    })

  }

}