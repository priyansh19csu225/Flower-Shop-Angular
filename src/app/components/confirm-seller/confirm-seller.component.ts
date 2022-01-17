import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-seller',
  templateUrl: './confirm-seller.component.html',
  styleUrls: ['./confirm-seller.component.css']
})
export class ConfirmSellerComponent implements OnInit {
 
  @Input() name:any
  constructor() { }

  ngOnInit() {
  }

}
