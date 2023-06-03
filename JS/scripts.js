//business logic

function Pizza(size, toppings, dining, tip) {
  this.size = size;
  this.toppings = toppings;
  this.dining = dining;
  this.tip = tip;
}

Pizza.prototype.pizzaCost = function () {
  let totalCost = 10;
  if (this.size === "small") {
    totalCost += 2;
    console.log(totalCost)
  } else if (this.size === "medium") {
    totalCost += 4;
    console.log(totalCost)
  } else {
    totalCost += 6;
    console.log(totalCost)
  }

  //  function checkedToppings() {
  //   checkedToppings = checkedArray;
  //   var toppingsChecked = document.getElementsByName("toppings");
  //   console.log(toppingsChecked);    
  //   checkedArray = array.forEach(toppingsChecked => {
  //   if (toppingsChecked.checked == true) {
  // console.log(checkedArray);
  //   } else  {
  //     console.log("no toppings chosen")
  //   }
  // })
  //   }




  if (this.toppings == "onion" || this.toppings == "peppers" || this.toppings == "pineApple") {
    totalCost = totalCost += .50;
    console.log(totalCost);
  } else if (this.toppings == "sausage" || this.toppings == "pepperoni" || this.toppings == "chicken") {
    totalCost = totalCost += 1;
    console.log(totalCost);
  } else {
    totalCost = totalCost + 0;
    console.log(totalCost);
  }


  totalCost;
  console.log(totalCost);



  if (this.dining === "delivery") {
    totalCost = totalCost += 5;
    console.log(totalCost)

  } else if (this.dining === "pickUp") {
    totalCost = totalCost += 0;
    console.log(totalCost)

  }

  if (this.tip === "5") {
    totalCost = totalCost + (totalCost * .05);
    console.log(totalCost)

  }
  else if (this.tip === "10") {
    totalCost = totalCost += (totalCost * .10);
    console.log(totalCost)

  }
  else if (this.tip === "15") {
    totalCost = totalCost += (totalCost * .15);
    console.log(totalCost)

  } else if (this.tip === "20") {
    totalCost = totalCost += (totalCost * .20);
    console.log(totalCost)

  } else {
    totalCost === (totalCost = + 0);
    console.log("no tip added")
  }

  return totalCost.toFixed(2);
}

//UI logic

function handleOrder(event) {
  event.preventDefault();
  const sizeChosen = document.querySelector("input[name=size]:checked").value;
  const diningChosen = document.querySelector("input[name=dining]:checked").value;
  console.log(diningChosen);
  const tipChosen = document.querySelector("input[name=tip]").value;
  console.log(tipChosen + "%");
  const toppingsChosen = document.querySelector("input[name=toppings]:checked").value;
  console.log(toppingsChosen);
  let pizzaOrder = new Pizza(sizeChosen, toppingsChosen, diningChosen, tipChosen);
  console.log(pizzaOrder);
  let cost = pizzaOrder.pizzaCost();
  document.querySelector("div#summary").removeAttribute("class", "hidden");
  document.querySelector("span#summary").innerText = ("Size: " + sizeChosen + "Toppings: " + toppingsChosen + "  Pick up or Delivery:  " + diningChosen +  "   Tip Amount: " + tipChosen + "%" + "Order Total: $" + cost);
  document.getElementById("completePizza").disabled = true;
};


function newOrder(event) {
  // document.event.preventDefault();
  document.querySelector("div#summary").setAttribute("class", "hidden");
  document.getElementById("completePizza").disabled = false;
  document.getElementById("startOver").disabled = false;
}

// function showTops() {
//   let toppings = 
//   document.getElementsByClassName("[pizzaToppings]:checked");
//   console.log(toppings);
//   if(toppings.checked = true) {
//  console.log(toppings);
//   }
// else {
//   toppings= "0";
//   console.log(showTops(toppings));
// }
// }

window.addEventListener("load", function () {
  document.querySelector("form#pizzaOrderForm").addEventListener("submit", handleOrder);
  document.getElementById("startOver").addEventListener("click", newOrder);

})


