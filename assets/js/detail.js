let detailSection = document.querySelector(".detailSection");

let id = window.location.search.slice(4);

function CreateDetail(
  productId,
  productDataCategory,
  img_url,
  productTitle,
  productPrice
) {
    const productDetail = document.createElement("div")
    productDetail.classList.add("productDetail")
    productDetail.innerHTML = 
    `
    <img src="${img_url}" alt="">
    <h4 class="titleCard">${productTitle}</h4>
    <span>$${productPrice}.00</span>
    `

    detailSection.appendChild(productDetail);
}

async function getProducts() {
  try {
    const res = await axios.get("http://localhost:5000/products");
    console.log(res.data);

    if (id) {
      const selectedProduct = res.data.find(product => product.id === parseInt(id));
      CreateDetail(
        selectedProduct.id,
        selectedProduct.category,
        selectedProduct.image,
        selectedProduct.title,
        selectedProduct.price
      );
    } else {
      res.data.forEach((element) => {
        CreateDetail(
          element.id,
          element.category,
          element.image,
          element.title,
          element.price
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();
