//business logic

function Pizza(size,toppings,dining, tip) {
  this.size = size;
  this.toppings = function(veg,meat) {
    this.veg = veg;
    this.meat = meat;
    toppings = (this.veg + this.meat);
  };
  this.dining = dining;
  this.tip = tip;
}

Pizza.prototype.pizzaCost = function() {
  let totalCost = 10;
  if (this.size === "small") {
    totalCost += 2; 
  } else if (this.size === "medium") {
    totalCost += 4;
  } else {
    totalCost += 6;
  }

this.toppings.forEach(function(veg,meat) {
  let toppingsCost  = 0;
  if ((veg.includes("onion"))||(veg.includes("peppers")) || (veg.includes("pineApple"))) {
    toppingsCost += .50;
  }
  else if ((meat.includes("sausage"))||(veg.includes("pepperoni")) || (veg.includes("chicken"))) {
    toppingsCost += 1;
  }
  totalCost = totalCost + toppingsCost;
   
})

if (this.dining === "delivery") {
  totalCost += 5;
} else if (this.dining === "pick-up") {
  totalCost += 0;
}

if (this.tip === "10%") {
  totalCost = totalCost += (totalCost * .10);
} 
else if(this.tip === "15%"){
  totalCost = totalCost += (totalCost * .15);
} else if (this.tip === "20%") {
totalCost = totalCost += (totalCost * .20); 
} else {
  totalCost =+ 0;
}

return totalCost.toFixed(2);
}


//UI logic

function handleOrder(event) {
  event.preventDefault();
  const sizeChosen = document.getElementById("pizzaSize").value;
  const diningChosen = document.querySelector("input[name=dining]:checked").value;
  const tipChosen = document.getElementById("tip").value;
  const toppingsChosen = ((document.querySelectorAll("input[name=meat]:checked")) + (document.querySelectorAll("input[name=veg]:checked")));
  let toppingsArray = Array.from(toppingsChosen);
  const toppings = [];
  toppingsArray.forEach(function(element) {
    toppings.push(element.value);
  });
  let pizzaOrder = new Pizza(sizeChosen, toppingsChosen, diningChosen, tipChosen)
  let cost = pizzaOrder.pizzaCost();
  document.querySelector("div#summary").removeAttribute("class", "hidden");
  document.querySelector("span#total").innerText = ("$" + cost);
  document.getElementById("submit").disabled = true;
  document.getElementById("reset").disabled = true;
};


function newOrder(event) {
  document.querySelector("button.startOver").removeAttribute("id");
  document.querySelector("div#summary").setAttribute("class", "hidden");
  document.getElementById("submit").disabled = false;
  document.getElementById("reset").disabled = false;
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaOrderForm").addEventListener("submit", handleOrder);
  document.querySelector("button.startOver").addEventListener("click", newOrder);

}) ;