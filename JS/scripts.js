//business logic

function Pizza(size,toppings,dining, tip) {
  this.size = size;
  this.toppings = toppings;
  this.dining = dining;
  this.tip = tip;
}

Pizza.prototype.toppings = function(veg,meat) {
  let toppingCost = 0;
  this.toppings.forEach(function() {
    if ((veg.includes("onion"))||(veg.includes("peppers")) || (veg.includes("pineApple"))) {
      toppingCost += .50;
      console.log(toppingCost);
    }
    else if ((meat.includes("sausage"))||(meat.includes("pepperoni")) || (meat.includes("chicken"))) {
      toppingCost += 1;
      console.log(toppingCost)
    }
  
      return totalCost + toppingCost;
     
  })
}

Pizza.prototype.pizzaCost = function() {
  let totalCost = 10;
  if (this.size === "small") {
    totalCost += 2; 
    console.log(totalCost)
  } else if (this.size === "medium") {
   totalCost += 4;
   console.log(totalCost)
  } else if (this.size === "large"){
totalCost += 6;
console.log(totalCost)
}

if (this.dining === "delivery") {
 totalCost = totalCost += 5;
  console.log(totalCost)

} else if (this.dining === "pickUp") {
  totalCost = totalCost += 0;
  console.log(totalCost)

}

console.log(totalCost)

if (this.tip === "5") {
  totalCost = totalCost + (totalCost * .05);
  console.log(totalCost)

}
else if (this.tip === "10") {
 totalCost = totalCost += (totalCost * .10);
  console.log(totalCost)

} 
else if(this.tip === "15"){
  totalCost = totalCost += (totalCost * .15);
  console.log(totalCost)

} else if (this.tip === "20") {
totalCost = totalCost += (totalCost * .20); 
console.log(totalCost)

} else {
  totalCost = totalCost =+ 0;
  console.log("no tip added")
}

return totalCost.toFixed(2);
}

//UI logic

function handleOrder(event) {
  event.preventDefault();
  const sizeChosen = document.querySelector("input[name=size]:checked").value;  
  console.log(sizeChosen);
  const diningChosen = document.querySelector("input[name=dining]:checked").value;
  console.log(diningChosen);
  const tipChosen = document.querySelector("input[name=tip]").value;
  console.log(tipChosen +"%");
  const toppingsChosen = (document.querySelectorAll("input[name=meat]:checked").value) + (document.querySelectorAll("input[name=veg]:checked").value);
  console.log(toppingsChosen);

  let pizzaOrder = new Pizza(sizeChosen, toppingsChosen, diningChosen, tipChosen);
  console.log(pizzaOrder);
  let cost = pizzaOrder.pizzaCost();
  document.querySelector("div#summary").removeAttribute("class", "hidden");
  document.querySelector("span#summary").innerText = ("$" + cost);
  document.getElementById("completePizza").disabled = true;
};


function newOrder(event) {
  document.querySelector("span.summary").removeAttribute("id");
  document.getElementById("submit").disabled = false;
  document.getElementById("reset").disabled = false;
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaOrderForm").addEventListener("submit", handleOrder);
  document.querySelector("button#startOver").addEventListener("click", newOrder);

}) ;