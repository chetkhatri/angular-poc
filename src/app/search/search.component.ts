import { Component, OnInit } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 public customer:any[];
  constructor(private http:Http) {
   }

  ngOnInit() {
  }
  searchCustomer(sf){
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   let cpParams = new URLSearchParams();
   cpParams.set('companyName', sf.value.companyName);
   let options = new RequestOptions({ headers: cpHeaders,params: cpParams});	
  this.http.get('http://localhost:8080/api/v1/customer/company',options)
   .subscribe( data => {
          this.customer=data.json();
          console.log(data.json());
   });
  }

}
