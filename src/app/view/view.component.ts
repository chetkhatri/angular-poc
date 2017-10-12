import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    
   public customers:any[]; 
   constructor(private http:Http) { 
   this.http.get('http://localhost:8080/api/v1/customer/all')
   .subscribe( data => {
          this.customers=data.json();
          console.log(data.json());
   });
   }

  ngOnInit() {
  }

}
