let productList = document.querySelector(".product-list");
let men = document.querySelector(".men");
let women = document.querySelector(".women");
let kids = document.querySelector(".kids");
let image = document.querySelector(".img");

(async () => {
  let rawData = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  );
  let data = await rawData.json();
  console.log(data);

  women.classList.remove("black");
  kids.classList.remove("black");
  men.classList.add("black");
  productList.innerHTML = "";
  data.categories[0].category_products.forEach((element) => {
    console.log(element);

    let offPercent = Math.round(
      ((element.compare_at_price - element.price) / element.compare_at_price) *
        100
    );
    console.log(offPercent);

    productList.innerHTML += `
<div class="product-container">
  <div class="img" >
       ${
         element.badge_text
           ? `<div class="tag">${element.badge_text}</div> `
           : ""
       }
     <img src="${element.image}" alt="image">
  </div>
  <div class="text">
    <div class="upper-text">
      <p class="bold">${element.title}</p>
      <p class="bold">.</p>
      <p>${element.vendor}</p>
    </div>
    <div class="lower-text">
      <p class="off-price">Rs ${element.price}</p>
      <p class="original-price">${element.compare_at_price}</p>
      <p class="off-percent">${offPercent}% off</p>
    </div>
 </div>
    <button>Add to cart</button>
</div>
    `;
  });

  men.addEventListener("click", () => {
    women.classList.remove("black");
    kids.classList.remove("black");
    men.classList.add("black");
    productList.innerHTML = "";
    data.categories[0].category_products.forEach((element) => {
      console.log(element);

      let offPercent = Math.round(
        ((element.compare_at_price - element.price) /
          element.compare_at_price) *
          100
      );
      console.log(offPercent);

      productList.innerHTML += `
    <div class="product-container">
      <div class="img">
      ${
        element.badge_text
          ? `<div class="tag">${element.badge_text}</div> `
          : ""
      }
         <img src="${element.image}" alt="image">
      </div>
      <div class="text">
        <div class="upper-text">
          <p class="bold">${element.title}</p>
          <p class="bold">.</p>
          <p>${element.vendor}</p>
        </div>
        <div class="lower-text">
          <p class="off-price">Rs ${element.price}</p>
          <p class="original-price">${element.compare_at_price}</p>
          <p class="off-percent">${offPercent}% off</p>
        </div>
     </div>
        <button>Add to cart</button>
    </div>
        `;
    });
  });

  women.addEventListener("click", () => {
    men.classList.remove("black");
    kids.classList.remove("black");
    women.classList.add("black");
    productList.innerHTML = "";
    data.categories[1].category_products.forEach((element) => {
      let offPercent = Math.round(
        ((element.compare_at_price - element.price) /
          element.compare_at_price) *
          100
      );

      productList.innerHTML += `
        <div class="product-container">
          <div class="img">
          ${
            element.badge_text
              ? `<div class="tag">${element.badge_text}</div> `
              : ""
          }
             <img src="${element.image}" alt="image">
          </div>
          <div class="text">
            <div class="upper-text">
              <p class="bold">${element.title}</p>
              <p class="bold">.</p>
              <p>${element.vendor}</p>
            </div>
            <div class="lower-text">
              <p class="off-price">Rs ${element.price}</p>
              <p class="original-price">${element.compare_at_price}</p>
              <p class="off-percent">${offPercent}% off</p>
            </div>
         </div>
            <button>Add to cart</button>
        </div>
            `;
    });
  });

  kids.addEventListener("click", () => {
    men.classList.remove("black");
    women.classList.remove("black");
    kids.classList.add("black");
    productList.innerHTML = "";
    data.categories[2].category_products.forEach((element) => {
      let offPercent = Math.round(
        ((element.compare_at_price - element.price) /
          element.compare_at_price) *
          100
      );

      productList.innerHTML += `
            <div class="product-container">
              <div class="img">
              ${
                element.badge_text
                  ? `<div class="tag">${element.badge_text}</div> `
                  : ""
              }
                 <img src="${element.image}" alt="image">
              </div>
              <div class="text">
                <div class="upper-text">
                  <p class="bold">${element.title}</p>
                  <p class="bold">.</p>
                  <p>${element.vendor}</p>
                </div>
                <div class="lower-text">
                  <p class="off-price">Rs ${element.price}</p>
                  <p class="original-price">${element.compare_at_price}</p>
                  <p class="off-percent">${offPercent}% off</p>
                </div>
             </div>
                <button>Add to cart</button>
            </div>
                `;
    });
  });
})();
