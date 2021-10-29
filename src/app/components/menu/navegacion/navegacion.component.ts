import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  public totalItem : number = 0;

  public searchTerm : string = ''; 

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()

    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

 

  

}
