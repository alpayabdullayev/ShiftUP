let main = document.querySelector("main");

let id = window.location.search.slice(4);

function CreateDetail(
  productId,
  productDataCategory,
  img_url,
  productTitle,
  productPrice
) {
    const productDetail = document.createElement("section")
    productDetail.classList.add("productDetail")
    productDetail.innerHTML = 
    `
      <section id="pageInfo">
        <div class="conatiner">
          <div class="howPage">
            <a href="index.html">HOME</a> 
            <span></span>
            <a href="detail.html">SHOP</a>
            <span></span>
            <a href="">${productDataCategory}</a>
          </div>
        </div>
      </section>
        <section id="detail" class="full-height">
          <div class="container">
            <div class="detailSection">
              <div class="detailImg">
                <img src="${img_url}" alt="">
              </div>
              <div class="detailInfo d-flex justify-content-between">
                <h1>${productTitle}</h1>
                <h3>${productPrice}</h3>
                <p>${productDataCategory}</p>
                <p></p>
              </div>
            </div>
          </div>
        </section>
    `

    main.appendChild(productDetail);
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
