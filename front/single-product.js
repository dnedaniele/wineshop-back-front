function renderSingleProduct(wine) {
  const productContainer = document.createElement("div");
  productContainer.classList.add("card");
  productContainer.classList.add("product");
  productContainer.style = "width: 18rem";

  // css
  productContainer.style.width = "width: 18rem";
  productContainer.style.display = "flex";
  productContainer.style.flexDirection = "column";

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-body");

  cardContainer.style.display = "flex";
  cardContainer.style.flexDirection = "column";

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

  //Add-to-Cart Buttons
  const addToCartButton = document.createElement("a");
  addToCartButton.classList.add("btn");
  addToCartButton.classList.add("btn-primary");
  //addToCartButton.href = `./add-to-cart.html?productId=${wine._id}`
  addToCartButton.innerHTML = "Add to Cart";

  // append all
  cardContainer.appendChild(productImg);
  cardContainer.appendChild(typeNameTag);
  cardContainer.appendChild(specName);
  cardContainer.appendChild(price);
  cardContainer.appendChild(addToCartButton);

  // oldest parent
  productContainer.appendChild(cardContainer);

  document.getElementById("prod-list-cont").appendChild(productContainer);
}

const getProduct = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId")
  console.log(productId);
  const response = await fetch(`http://localhost:3000/wines/${productId}`);
  const data = await response.json();
  console.log(data);

  renderSingleProduct(data);
};

getProduct();