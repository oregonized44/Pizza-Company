/*///--------------------------------------/////
////   Initializing global variables
////---------------------------------------//*/

var personalPizza;
var total = 0;
var portion;
var veggies = [];
var meats [];
var fruits [];
var toppings = [veggies,meats,fruits];

/*///--------------------------------------/////
////   Pizza Constructor
////---------------------------------------//*/

function Pizza(size,veggies,meats,fruits){
  this.size = size;
  this.veggies = veggies;
  this.meats = meats;
  this.fruits = fruits;
}
