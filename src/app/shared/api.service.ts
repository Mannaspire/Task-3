import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postAdminvendor(data: any) {
    return this.http.post<any>("http://localhost:9090/api/auth/signin", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getAdminvendor(username: any) {
    return this.http.get<any>("http://localhost:9090/api/auth/signin?role=vendor")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateAdminvendor(data: any, id: number) {
    return this.http.put<any>("http://localhost:9090/api/auth/signin" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteAdminvendor(id: number) {
    return this.http.delete<any>("http://localhost:9090/api/auth/signin" + "/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  postVendor(data: any) {
    return this.http.post<any>("http://localhost:9090/products/", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getVendor() {
    return this.http.get<any>("http://localhost:3000/vendorproduct")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateVendor(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/vendorproduct" + "/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteVendor(id: number) {
    return this.http.delete<any>("http://localhost:3000/vendorproduct" + "/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getProductById(username: any) {
    return this.http.get<any>("http://localhost:3000/vendorproduct/?vendorname=" + username)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getVendorById(username: any) {
    return this.http.get<any>("http://localhost:3000/adminvendor/?username=" + username)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  login(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  isloggin() {
    if (sessionStorage.getItem('user')) {
      return true;
    }
    else {
      return false;
    }
  }
}
