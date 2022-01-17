import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sell-items',
  templateUrl: './sell-items.component.html',
  styleUrls: ['./sell-items.component.css']
})
export class SellItemsComponent implements OnInit {
  sellername:String
  email:String
  name:String
  price:number
  quantity:number

  postData(){
    let url = "http://httpbin.org/post"
    // let url = environment.url
this.http.post(url,{
  name:this.name,sellername:this.sellername,email:this.email,price:this.price,quantity:this.quantity
}).toPromise().then((data: any) => {
  console.log(data)
  console.log(JSON.stringify(data.json))
})
this.router.navigate(['confirm_seller']);
  }
  constructor(private http:HttpClient,private router: Router) { }
 
  ngOnInit() {
  }

}
