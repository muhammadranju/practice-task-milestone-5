async function getData() {
  const data = await fetch(
    "https://e-commerce-api-orth.onrender.com/api/v1/products"
  );
  const jsonData = await data.json();
  const root = document.getElementById("root");
  root.innerHTML = ""; // Clear existing content

  for (let product of jsonData.data.products) {
    root.innerHTML += /*html*/ `
      <div class="card bg-base-100 w-96 shadow-xl ">
        <figure>
          <img
            src="${product.cover_image}"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${product.title}</h2>
          <p>${
            product.description.length >= 50
              ? product.description.substring(0, 80).concat("...")
              : product.description
          }</p>
          <span>Price:${product.regular_price} TK</span>
          <span>Stock: ${product.stock_quantity} TK</span> 
          <span>Available: ${product.stock_status}</span> 
          <div class="card-actions ">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`;

    console.log(product.title);
  }
}

getData();
