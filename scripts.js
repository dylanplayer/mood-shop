import data from './data.js';

const itemsContainer = document.querySelector("#items");

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
    newDiv.appendChild(button);

    
    console.log(img);
    itemsContainer.appendChild(newDiv);

}