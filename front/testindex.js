fetch("http://localhost:3000/wines-list", {
      method: "get",
      mode: "cors"
    }).then((response) => (response.json())
    ).then((data) => {
      renderProductList(data);

    });

    function renderSingleProduct(wine) {
        const productContainer = document.createElement("div");
        productContainer.classList.add("card");
        productContainer.classList.add("product");
      
        // css
        productContainer.style.width = "width: 18rem";
        productContainer.style.display = "flex";
        productContainer.style.flexDirection = "column";
      
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-body");
      
        cardContainer.style.display = "flex";
        cardContainer.style.flexDirection = "column";
      
        // Content from Server
      
        const productImg = document.createElement("img");
        productImg.classList.add("card-img-top");
        productImg.src = wine.image;
      
        const typeNameTag = document.createElement("h4");
        typeNameTag.classList.add("card-title");
        typeNameTag.innerHTML = wine.typeName;
      
        cardContainer.appendChild(productImg);
        cardContainer.appendChild(typeNameTag);
      
        // oldest parent
        productContainer.appendChild(cardContainer);
      
        document.getElementById("prod-list-cont").appendChild(productContainer);
      }
      
      function renderProductList(list) {
        list.forEach(renderSingleProduct);
      }