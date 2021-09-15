import data from './data.js';

const itemsContainer = document.querySelector("#items");
const cartContainer = document.querySelector("#cart");

let cart = [];

const cartUpdateButton = document.querySelector("#cart-update-button");
cartUpdateButton.onclick = updateCart;

function updateCart(){

    for(var i = 0; i < cart.length; i++){

        var selector = document.getElementById(`qty-dropdown-${cart[i].id}`);
        cart[i].qty = parseInt(selector.value);
        if(cart[i].qty == 0){

            cart.pop(i);

        }

    }

    showCart();

}

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

    if(cart.length > 0){
        var total = 0;
        var count = 0;

        console.log("------------ Cart ------------");
        for(var i = 0; i < cart.length; i++){

            console.log(`Name: ${cart[i].name} Price ${cart[i].price} Qty: ${cart[i].qty}`);
            count += cart[i].qty;
            total += cart[i].price * cart[i].qty;

        }
        console.log(`Total: ${total} Quantity: ${count}`);
        console.log("------------------------------");

        const totalText = document.createElement("h4");
        totalText.className = "cart-total";
        totalText.innerText = `Total: ${total.toFixed(2)}`;
        cartContainer.appendChild(totalText);

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
            dropdown.id = `qty-dropdown-${cart[i].id}`;

            for(var j = cart[i].qty; j > 0; j--){

                const qty1 = document.createElement("option");
                qty1.className = "qty";
                qty1.value = cart[i].qty - j;
                qty1.innerText = cart[i].qty - j;
                dropdown.appendChild(qty1);

            }

            const qty = document.createElement("option");
            qty.className = "qty";
            qty.selected = "selected";
            qty.innerText = cart[i].qty;
            qty.value = cart[i].qty;
            dropdown.appendChild(qty);

            for(var j = 1; j < 4; j++){

                const qty1 = document.createElement("option");
                qty1.className = "qty";
                qty1.innerText = cart[i].qty + j;
                qty1.value =  cart[i].qty + j;
                dropdown.appendChild(qty1);

            }

            newDiv.appendChild(dropdown);
            cartContainer.appendChild(newDiv);

        }
    }else{

        const totalText = document.createElement("h4");
        totalText.className = "cart-total";
        totalText.innerText = `Cart is empty`;
        cartContainer.appendChild(totalText);
        
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

