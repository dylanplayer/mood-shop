import data from './data.js';

const itemsContainer = document.querySelector("#items");

let cart = [];

function addItem(){

    cart.push(data[this.id-1]);

}

function showCart(){

    var total = 0;
    var count = 0;

    console.log("------------ Cart ------------");
    for(var i = 0; i < cart.length; i++){

        console.log(`Name: ${cart[i].name} Price ${cart[i].price}`);
        total += cart[i].price;
        count++;

    }
    console.log(`Total: ${total} Quantity: ${count}`);
    console.log("------------------------------");

}

let cartAnchor = document.getElementById("cart-anchor");
cartAnchor.onclick = showCart;

for(let i = 0; i < data.length; i += 1){
    
    const newDiv = document.createElement("div");
    newDiv.className = "item"
    
    const img = document.createElement("img");
    
    img.src = data[i].image;
    newDiv.appendChild(img);
    
    const name = document.createElement("h5");
    name.className = "name";
    name.innerText = data[i].name;
    newDiv.appendChild(name);
    
    const description = document.createElement("p");
    description.className = "description";
    description.innerText = data[i].desc;
    newDiv.appendChild(description);
    
    const price = document.createElement("p");
    price.className = "price";
    price.innerText = data[i].price;
    newDiv.appendChild(price);
    
    const button = document.createElement("button");
    button.id = data[i].id;
    button.dataset.price = data[i].price;
    button.innerHTML = "Add to Cart";
    button.onclick = addItem;
    newDiv.appendChild(button);
    
    itemsContainer.appendChild(newDiv);
    
}
