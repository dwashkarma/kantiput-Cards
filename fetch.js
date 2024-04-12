async function Products() {
  console.log("Starting the function............");
  let data = await fetch("https://dummyjson.com/products");
  let productData = await data.json();

  let cards = "";
  productData.products.map((items, index) => {
    cards += `<div class="card" style="width: 18rem;">
  <img style="height:8rem" src=${
    items.thumbnail
  } class="card-img-top" alt="Not found">
  <div class="card-body">
    <h5 class="card-title">${items.title}</h5>
    <p class="card-text">${items.description.slice(0, 15) + "..."}"</p>
    
  </div>
</div>`;
  });
  document.getElementById("card").innerHTML = cards;
}

Products();
