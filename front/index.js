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

  // Content from Server

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

  //Details Buttons
  const detailsButton = document.createElement("a");
  detailsButton.classList.add("btn");
  detailsButton.classList.add("btn-primary");
  detailsButton.href = `./single-product-page.html?productId=${wine._id}`;
  detailsButton.innerHTML = "Product Details";

  // append all
  cardContainer.appendChild(productImg);
  cardContainer.appendChild(typeNameTag);
  cardContainer.appendChild(specName);
  cardContainer.appendChild(price);
  cardContainer.appendChild(detailsButton);

  // oldest parent
  productContainer.appendChild(cardContainer);

  document.getElementById("prod-list-cont").appendChild(productContainer);
}

function renderProductList(list) {
  list.forEach(renderSingleProduct);
}

// Old FETCH

/* fetch("http://localhost:3000/wines-list", {
      method: "get",
      mode: "cors"
    }).then((response) => (response.json())
    ).then((data) => {
      console.log(data);

    }); */

// resources: https://www.youtube.com/watch?v=CWjNefiE47Y , https://www.youtube.com/watch?v=Yp9KIcSKTNo

// ASYNC AWAIT

const getProduct = async () => {
  const response = await fetch(`http://localhost:3000/wines-list`);
  const data = await response.json();
  console.log(data);

  renderProductList(data);
};

getProduct();
