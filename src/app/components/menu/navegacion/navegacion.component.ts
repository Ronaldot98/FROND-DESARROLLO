import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CartService } from 'src/app/services/cart.service';

=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

<<<<<<< HEAD
  public totalItem : number = 0;

  public searchTerm : string = ''; 

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()

    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

 

  

=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 681659f6004a85eab07669b989a7363909056d05
}
