/*///--------------------------------------/////
////   Initializing global variables
////---------------------------------------//*/

var personalPizza;
var total = 0;
var size;
var portion;
var veggies = [];                          // Initializes variables to later be accessed or passed into function parameters
var meats = [];
var fruits = [];
var toppings = [veggies,meats,fruits];

/*///--------------------------------------/////
////   Pizza Constructor
////---------------------------------------//*/

function Pizza(size,veggies,meats,fruits){
  this.size = size;
  this.veggies = veggies;                  // Will create our pizza with our passed in global variables for parameters
  this.meats = meats;
  this.fruits = fruits;
}

/*///--------------------------------------/////
//// Pizza Proto methods / Business Logic
////---------------------------------------//*/

Pizza.prototype.portionCost = function(){
  if(this.size === "small"){
    return total += 10.00;                  // Method adding pizza size cost
  }else if(this.size === "medium"){
    return total += 15.00;
  }else{
    return total += 20.00;
  }
}
Pizza.prototype.veggieCost = function(){
  this.veggies.forEach(function(veg){       // Method to calculate the cost of veggies on the pizza by incrementing fifty-cents per veggie in my veggies array
    return total += .50;
  });
}
Pizza.prototype.meatCost = function(){
  this.meats.forEach(function(meat){        // Method to calculate the cost of meats on the pizza by incrementing one dollar per meat in my meats array
    return total += 1.00;
  });
}
Pizza.prototype.fruitCost = function(fruit){
  this.fruits.forEach(function(fruit){      // Method to calculate the cost of fruits on the pizza by incrementing seventy-five cents per fruit in my fruits array
    return total += .75;
  });
}

/*///--------------------------------------/////
////   Event Listeners / Interface Logic
////---------------------------------------//*/

$(document).ready(function(){
  $("#order-pizza").click(function(event){
    event.preventDefault();
    size = $('input[name="size"]:checked').val();
    console.log(size);
    meats.push($('input[name="meat"]:checked').val());
    console.log(meats);
    veggies.push($('input[name="veggie"]:checked').val());
    console.log(veggies);        // Will push values to my global variables and arrays to later be passed in to my methods
    fruits.push($('input[name="fruit"]:checked').val());
    console.log(fruits);

  });
});
