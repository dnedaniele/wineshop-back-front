function renderSingleProduct(wine) {
  const productContainer = document.createElement("div");
  productContainer.classList.add("card");
  productContainer.classList.add("product");
  productContainer.style = "width: 13rem";

  // css
  productContainer.style.width = "width: 13rem";
  productContainer.style.display = "flex";
  productContainer.style.flexDirection = "column";

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-body");

  cardContainer.style.display = "flex";
  cardContainer.style.flexDirection = "column";

  // list ul
  const unorderedList = document.createElement("ul");

  // Content from MongoDB

  //IMG
  const productImg = document.createElement("img");
  productImg.classList.add("card-img-top");
  productImg.src = wine.image;

  // typeName
  const typeNameTag = document.createElement("h4");
  typeNameTag.classList.add("card-title");
  typeNameTag.innerHTML = wine.typeName;

  //specName
  const specName = document.createElement("h5");
  specName.innerHTML = wine.specName;

  //price
  const price = document.createElement("p");
  price.classList.add("card-text");
  price.innerHTML = "Price: " + wine.price + " €";

  //Buy Button
  const buyButton = document.createElement("a");
  buyButton.classList.add("btn");
  buyButton.classList.add("btn-primary");
  buyButton.innerHTML = "Buy Now";
  //buyButton.href = `./add-to-cart.html?productId=${wine._id}`
  buyButton.onclick = function () {
    const cardPriceTot = document.createElement("div");
    const priceShow = document.createElement("h5");
    let shipping = 5.99;
    const totalAmount = (wine.price + shipping).toFixed(2);
    priceShow.innerHTML = `Shipping cost = ${shipping}€    Price incl vat = ${wine.price}€    Total = ${totalAmount}€`;
    cardPriceTot.appendChild(priceShow);
    productContainer.appendChild(cardPriceTot);
    setTimeout(function () {
      alert("THANKS A LOT FOR YOUR PURCHASE");
    }, 1500);
  };

  // append all
  cardContainer.appendChild(productImg);
  cardContainer.appendChild(typeNameTag);
  cardContainer.appendChild(specName);
  cardContainer.appendChild(price);
  cardContainer.appendChild(buyButton);

  // oldest parent
  unorderedList.appendChild(cardContainer);
  //cardPriceTot.appendChild(priceShow);
  // productContainer.appendChild(cardPriceTot);
  productContainer.appendChild(unorderedList);

  document.getElementById("prod-list-cont").appendChild(productContainer);
}

const getProduct = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  const response = await fetch(`http://localhost:3000/wines/${productId}`);
  const data = await response.json();
  console.log(data);

  renderSingleProduct(data);
};

getProduct();
