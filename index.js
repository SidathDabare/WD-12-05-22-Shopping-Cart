const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTIzNTcyMzUsImV4cCI6MTY1MzU2NjgzNX0.uJ9IcyjqqB2WQ842oL3FhYbxUU6dfUJGcMMwlTDZFa4",
  },
};

const postPrducts = async (event) => {
  event.preventDefault();
  const submitObj = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
  };
  console.log(submitObj);
  await fetch(endpoint, options),
    {
      method: "POST",
      body: JSON.stringify(submitObj),
      headers: { "Content-Type": "appliction/json" },
    };
};
// window.onload = () => {
//   loadProducts();
// };

const loadProducts = async () => {
  try {
    const response = await fetch(endpoint, options);
    // {
    //   method: "GET",
    //   body: JSON.stringify(submitObj),
    //   headers: { "Content-Type": "appliction/json" },
    // }
    const products = await response.json();

    console.log(products);

    // renderBooks(books);
  } catch (err) {
    console.log(err);
  }
  console.log("HERE");
};

// const renderBooks = (books) => {
//     const row = document.querySelector(".row");
//     row.innerHTML = "";
//     if (Array.isArray(books)) {
//         books.forEach((book, index, books) => {
//         const col = document.createElement("div");
//         col.className = "col-6 col-sm-4 col-md-6 col-lg-4 mb-2 px-2";
//         col.innerHTML = `<div class="card">
//                                 <img src=${book.img} class="card-img-top" alt="...">
//                                 <div class="card-body pl-2">
//                                 <small class="text-muted font-weight-bold">Id: ${book.asin}</small>
//                                     <h5 class="card-title">${book.title}</h5>
//                                     <p class="card-text">${book.category}</p>
//                                     <p class="card-text">$${book.price}</p>

//                                     <button class="btn btn-info col-7 addToCart">ADD TO CART</button>
//                                     <button class="btn btn-primary col-4 skipBtn">SKIP</button>
//                                 </div>
//                             </div>`;

//         });
//     } else {
//         alert("provide a valid array");
//     }
//     };
