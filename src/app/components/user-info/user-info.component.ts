import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private router: Router) { }
username='';
email='';
  ngOnInit() {
  }
  public user: {username:string , email:string } = { username : this.username , email : this.email };
  
Adduserdata(username,email){
  console.log(username);
  // this.username=username;
  this.user.email=email;
  this.user.username = username;
  // this.router.navigate(['buy'])
  this.router.navigateByUrl('/buy', { state: this.user });
}

}
