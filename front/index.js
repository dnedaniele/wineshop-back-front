// ALT FETCH

/* fetch("http://localhost:3000/wines-list", {
      method: "get",
      mode: "cors"
    }).then((response) => (response.json())
    ).then((data) => {
      console.log(data);

    }); */

// ASYNC AWAIT

   const getProduct = async () => {
        const response = await fetch(`http://localhost:3000/wines-list`);
         const data = await response.json();
         
         console.log(data); 
         renderSingleProduct(data)
         return data
      }

      getProduct(); 
   // getProduct().then(renderSingleProduct(data)); 

function renderSingleProduct(wine) {
  const productContainer = document.createElement("div");
  productContainer.classList.add("card");
  productContainer.classList.add("product");
  productContainer.innerHTML= "hallo" //

  // css
  productContainer.style.width = "width: 18rem";
  productContainer.style.display = "flex";
  productContainer.style.flexDirection = "column";

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-body");

  cardContainer.style.display = "flex";
  cardContainer.style.flexDirection = "column";



  document.getElementById("prod-list-cont").appendChild(productContainer);
}

//renderSingleProduct(data);

    
