// const productsAPI = "  http://localhost:3000/products"

// async function productsData() {
//     try {
//         const response = await axios.get(productsAPI)
//         console.log(response);
//         addProductCards(response.data)
//     } catch (error) {
//         console.log(error);
//     }
// }
// productsData()

// const productsList = document.querySelector("#products-main");

// function addProductCards(data) {
//     data.forEach(product => {
//         const productCart = document.createElement("div");
//         productCart.classList.add("product-card")
//         productCart.innerHTML = `
//             <div class="black-add-basket">
//                 <a href="#">${product.category}</a>
//                 <div class="add-to-cart">
//                     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
//                     <h5>ADD TO CART</h5>
//                 </div>
//             </div>
//             <div id="detail">
//                 <a href="#">${product.category}</a>
//                 <img src="${product.image}" alt="">
//                 <h4>${product.title}</h4>
//                 <span>$${product.price}.00</span>
//             </div>
//             `
//         productsList.append(productCart)
//     });
// }

