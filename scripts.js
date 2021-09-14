import data from './data.js';

const itemsContainer = document.querySelector("#items");
const cartContainer = document.querySelector("#cart");

let cart = [];

function addItem(){
    
    var existsInCart = false;
    var loctionOfCurrentItem = 0;
    for(var i = 0; i < cart.length; i++){

        if(cart[i].id == this.id){

            existsInCart = true;
            loctionOfCurrentItem = i;
            break;

        }else{

            loctionOfCurrentItem = i+1;
            
        }

    }

    if(existsInCart){

        cart[loctionOfCurrentItem].qty++;

    }else{

        cart.push(data[this.id-1]);
        cart[loctionOfCurrentItem].qty = 1;

    }

    showCart();

}

function showCart(){

    cartContainer.querySelectorAll('*').forEach(item => item.remove());

    var total = 0;
    var count = 0;

    console.log("------------ Cart ------------");
    for(var i = 0; i < cart.length; i++){

        console.log(`Name: ${cart[i].name} Price ${cart[i].price} Qty: ${cart[i].qty}`);
        total += cart[i].price;
        count += cart[i].qty;

    }
    console.log(`Total: ${total} Quantity: ${count}`);
    console.log("------------------------------");

    for(var i = 0; i < cart.length; i++){

        const newDiv = document.createElement("div");
        newDiv.className = "cart-item";

        const img = document.createElement("img");
        img.src = cart[i].image;
        newDiv.appendChild(img);

        const name = document.createElement("h5");
        name.className = "name";
        name.innerText = cart[i].name;
        newDiv.appendChild(name);

        const price = document.createElement("p");
        price.className = "price";
        price.innerText = "$" + cart[i].price;
        newDiv.appendChild(price);

        const dropdown = document.createElement("select");
        dropdown.className = "qty-dropdown";

        for(var j = cart[i].qty; j > 0; j--){

            const qty1 = document.createElement("option");
            qty1.className = "qty";
            qty1.innerText = cart[i].qty - j;
            dropdown.appendChild(qty1);

        }

        const qty = document.createElement("option");
        qty.className = "qty";
        qty.selected = "selected";
        qty.innerText = cart[i].qty;
        dropdown.appendChild(qty);

        
        const qty1 = document.createElement("option");
        qty1.className = "qty";
        qty1.innerText = cart[i].qty + 1;
        dropdown.appendChild(qty1);

        newDiv.appendChild(dropdown);
        cartContainer.appendChild(newDiv);

    }

}

let cartAnchor = document.getElementById("cart-anchor");
cartAnchor.onclick = showCart;

for(let i = 0; i < data.length; i += 1){
    
    const newDiv = document.createElement("div");
    newDiv.className = "item";
    
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
    price.innerText = "$" + data[i].price;
    newDiv.appendChild(price);
    
    const button = document.createElement("button");
    button.id = data[i].id;
    button.dataset.price = data[i].price;
    button.innerHTML = "Add to Cart";
    button.onclick = addItem;
    newDiv.appendChild(button);
    
    itemsContainer.appendChild(newDiv);
    
}

