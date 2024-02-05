import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public foods: Food[] =[];

  constructor(private foodService: FoodService) { 
    this.foods = this.foodService.getAll();
  }
  ngOnInit(): void {
    
  }

}