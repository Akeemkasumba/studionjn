let products = {
    data:[{
        productName: "Banana",
        category: "Plants",
        price: "0.1"
        school: 'tutleimages/banana.png',
        
    }]
}

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category
    card.classList.add("card","i.category");
    //image div
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    card.appendChild(imgContainer);

    document.getElementById("products").appendChild(card);
}