//const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
// const options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTIzNTcyMzUsImV4cCI6MTY1MzU2NjgzNX0.uJ9IcyjqqB2WQ842oL3FhYbxUU6dfUJGcMMwlTDZFa4",
//     "Content-Type": "application/json",
//   },
// };
const product_id = new URLSearchParams(window.location.search).get("productId");
const currentUrl = product_id
  ? "https://striveschool-api.herokuapp.com/api/product/" + product_id
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = product_id ? "PUT" : "POST";

window.onload = async () => {
  const submitBtn = document.querySelector("button[type='submit']");
  if (product_id) {
    document.querySelector(".title").innerText = "EDIT PRODUCT";
    const response = await fetch(currentUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTIzNTcyMzUsImV4cCI6MTY1MzU2NjgzNX0.uJ9IcyjqqB2WQ842oL3FhYbxUU6dfUJGcMMwlTDZFa4",
      },
    });
    const { brand, description, imageUrl, name, price } = await response.json();
    document.getElementById("name").value = name;
    document.getElementById("description").value = description;
    document.getElementById("brand").value = brand;
    document.getElementById("image").value = imageUrl;
    document.getElementById("price").value = price;
    submitBtn.innerText = "UPDATE PRODUCT";
    submitBtn.classList.remove("btn-primary");
    submitBtn.classList.add("btn-info");

    const deleteBtn = document.querySelector(".deleteBtn");
    deleteBtn.classList.remove("d-none");
  }
};
const postPrducts = async (event) => {
  event.preventDefault();
  const submitObj = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("image").value,
    price: document.getElementById("price").value,
  };
  console.log(submitObj);
  const response = await fetch(currentUrl, {
    //method: "POST",
    method,
    body: JSON.stringify(submitObj),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTIzNTcyMzUsImV4cCI6MTY1MzU2NjgzNX0.uJ9IcyjqqB2WQ842oL3FhYbxUU6dfUJGcMMwlTDZFa4",
    },
  });
  const getId = await response.json();
  // console.log("id of" + getId._id);
  if (product_id) {
    alert("Product with the id of" + getId._id + " got edited");
  } else {
    alert("Product created successfully with the id of" + getId._id);
  }
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("brand").value = "";
  document.getElementById("image").value = "";
  document.getElementById("price").value = "";
};
const deleteProduct = async () => {
  console.log("deleting");
  fetch(currentUrl, {
    //method: "POST",
    method: "DELETE",
    //body: JSON.stringify(submitObj),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTIzNTcyMzUsImV4cCI6MTY1MzU2NjgzNX0.uJ9IcyjqqB2WQ842oL3FhYbxUU6dfUJGcMMwlTDZFa4",
    },
  });
};
