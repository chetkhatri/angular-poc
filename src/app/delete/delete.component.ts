import { Component, OnInit } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }
  deleteCustomer(df){
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   let cpParams = new URLSearchParams();
   cpParams.set('firstName', df.value.firstName);	
   cpParams.set('lastName', df.value.lastName);
  let options = new RequestOptions({ headers: cpHeaders,params: cpParams});
 
   this.http.delete('http://localhost:8080/api/v1/customer/churn',options)
       .subscribe(response =>
       {
            //console.log(response.json());

       });

  }

}
