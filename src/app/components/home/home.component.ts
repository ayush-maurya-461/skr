import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  productList = [
    {
      name:'Gulabjamun',
      price:'120',
      image:'assets/gulabjamun.jpeg',
      description:'Delicious dessert'
    },
    {
      name:'Jalebi',
      price:'160',
      image:'assets/jalebi.jpeg',
      description:'Delicious dessert'
    }
  ]

  isAddingNewItem = false;


  submitNewDish(form : NgForm){
    // if(form.valid){
      this.productList.push(form.value)
      this.isAddingNewItem = false
    // }
  }

}
