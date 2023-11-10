const productsList = document.querySelector("#products-main");
let bascetCountQuantity = document.querySelector(".count1");
let bascetCountQuantity1 = document.querySelector(".countfixed");

let basketArr = getLocalStorage("basket") || [];

let totalCost = 0;

let id = window.location.search.slice(4);
let detailSection = document.querySelector(".detailSection");

// let addToBasketClickCount = 0;
// let addedProducts = {};
function setLocalStorage(key,data) {
    localStorage.setItem(key,JSON.stringify(data))
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || []
}

function CreateCard(
  productId,
  productDataCategory,
  img_url,
  productTitle,
  productPrice
) {
  const productCart = document.createElement("div");
  productCart.classList.add("product-card");
  productCart.innerHTML = `
    
             <div class="black-add-basket">
                 <a href="detail.html?id=${productId}">${productDataCategory}</a>
                 <div class="add-to-cart">
                     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                     <h5 class="addToBasket">ADD TO CART</h5>
                 </div>
             </div>
             <div id="detail" class="detail">
                 <a href="">${productDataCategory}</a>
                 <img src="${img_url}" alt="">
                 <h4 class="titleCard">${productTitle}</h4>
                 <span>$${productPrice}.00</span>
             </div>
             
    `;
    let addToBasket = productCart.querySelector(".addToBasket")
    addToBasket.onclick = function (e) {
        e.preventDefault();
        if (basketArr.find((x) => x.productId === productId)) {
        return
        }
        // if(addedProducts[productId]){
        //     openOffCanvas();
        //     return;
        // }
        let product = {
            productId,
            productDataCategory,
            img_url,
            productTitle,
            productPrice,
            Productcount: 1,
        };
        basketArr.push(product)
        console.log(basketArr);
        setLocalStorage("basket",basketArr)
    //     addToBasketClickCount++;

    // if (addToBasketClickCount === 1) {

    //   bascetCountQuantity.textContent = basketArr.length;
    //   bascetCountQuantity1.textContent = basketArr.length;
    // } else if (addToBasketClickCount === 2) {
    //   openOffCanvas();
    //   addToBasketClickCount = 0; 
    // }

        // addedProducts[productId] = true;
        generateBasketCards()
        let localLength = getLocalStorage("basket").length;
        bascetCountQuantity.textContent = basketArr.length;
        bascetCountQuantity1.textContent = basketArr.length;
        totalCost += productPrice; 
        updateTotalCostDisplay();
        



    }
    const detailLink = productCart.querySelector(".black-add-basket a");
    detailLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `detail.html?id=${productId}`;
    });
    productsList.append(productCart);
    const searchInput = document.querySelector(".search");

    searchInput.addEventListener("input", (e) => {;
        e.preventDefault

    searchInput.addEventListener("input", (e) => {
        e.preventDefault
        let value = e.target.value.toLowerCase();
        const cards = productCart.querySelectorAll(".detail");
    
        cards.forEach(card => {
            const title = card.querySelector(".titleCard").textContent.toLowerCase();
            if (title.includes(value)) {
                productCart.style.display = "block";
                console.log("isledi");
            } else {
                productCart.style.display = "none";   
            }
        });
    });
});
}

function CreateDetail(
    productId,
    productDataCategory,
    img_url,
    productTitle,
    productPrice
) {
    const productDetail = document.createElement("div");
    productDetail.classList.add("productDetail");
    
    productDetail.innerHTML = `
        <img src="${img_url}" alt="">
        <h4 class="titleCard">${productTitle}</h4>
        <span>${productPrice}.00</span>
    `;
    let detailSection = document.querySelector(".detailSection");
    detailSection.appendChild(productDetail);
    
}

async function getProducts() {
    try {
        const res = await axios.get("http://localhost:5000/products");
        console.log(res.data);

        let found = false;

        res.data.forEach(element => {
            if (id && element.id === parseInt(id)) {
                CreateDetail(
                    element.id,
                    element.category,
                    element.image,
                    element.title,
                    element.price
                );
                found = true;
            }
        }); 
        // if (!found) {
        //     window.location.href = "404.html";
        //     return; 
        // }
        if (!found) {
            res.data.forEach(element => {
                CreateCard(
                    element.id,
                    element.category,
                    element.image,
                    element.title,  
                    element.price
                );
            });
        }
        

    } catch (error) {
        console.log("error", error);
    }
}



let localLength = getLocalStorage("basket").length;
bascetCountQuantity.textContent = basketArr.length;
bascetCountQuantity1.textContent = basketArr.length;

function generateBasketCards() {
    const offcanvasContentMain = document.getElementById("offcanvasContentMain")
    offcanvasContentMain.innerHTML = '';
    basketArr.forEach((product)=>{
        const productDiv = document.createElement("div")
        productDiv.innerHTML = 
        
        `
        <div class="miniCard d-flex">
            <div class="card-img">
                <img src="${product.img_url}" alt="">
            </div>
            <div class="cardInfo d-flex flex-column">
            <div class="cardName"><h5>${product.productTitle}</h5></div>
            <div class="cardCount">
            <span>${product.productPrice} x</span>
            
            <button onclick="decreaseCount(${product.productId})">-</button><span>${product.Productcount}</span> <button onclick="increaseCount(${product.productId})">+</button>
            </div>
            
        </div>
            <div class="delete">
                <button class="deleteBtn" data-id="${product.productId}">X</button>
            </div>
        </div>
        `
        offcanvasContentMain.appendChild(productDiv)
        const deleteBtn = productDiv.querySelector(".deleteBtn")
        deleteBtn.addEventListener("click",()=>{
            const productId = parseInt(deleteBtn.getAttribute("data-id"))
            removeBasket(productId)
            console.log("salam");
        })

    })

}

function openOffCanvas() {
    const offCanvas = document.getElementById("offCanvas");
    offCanvas.style.display = "block";
  }

function removeBasket(productId) {
    basketArr = basketArr.filter((product) => product.productId !== productId);
    setLocalStorage("basket", basketArr);
    generateBasketCards();
    updateTotalCostDisplay()
    
    let localLength = getLocalStorage("basket").length;
    bascetCountQuantity.textContent = basketArr.length;
    bascetCountQuantity1.textContent = basketArr.length;
    
}


function increaseCount(productId) {
    const product = basketArr.find((p) => p.productId === productId);
    if (product) {
      product.Productcount++;
      setLocalStorage("basket", basketArr);
      generateBasketCards();
      updateTotalCostDisplay();
    }
    console.log("salam");
}

function decreaseCount(productId) {
    const product = basketArr.find((p) => p.productId === productId);
    if (product && product.Productcount > 1) {
      product.Productcount--;
      setLocalStorage("basket", basketArr);
      generateBasketCards();
      updateTotalCostDisplay();
    }
    console.log("salam");
}



initializeBasket();

function initializeBasket() {
    basketArr = getLocalStorage("basket") || [];
    generateBasketCards();
    updateTotalCostDisplay();
}

function calculateTotalCost() {
    const totalCost = basketArr.reduce((acc, product) => {
      return acc + product.productPrice * product.Productcount;
    }, 0);
  
    return totalCost;
}
  
  function updateTotalCostDisplay() {
    const totalCost = calculateTotalCost();
    const discountedTotalCost = calculateDiscountedTotalCost();
    const totalCount = document.querySelector("#totalCost");
    const discountedTotalCount = document.querySelector("#discountedTotalCost");
  
    if (totalCount) {
      totalCount.innerHTML = `<div class="totalcostMain d-flex justify-content-between align-items-center"><span>SUBTOTAL :</span>  <span>${totalCost.toFixed(2)} AZN</span></div> `;
    }
  
    if (discountedTotalCount) {
      discountedTotalCount.textContent = `endirimli cemi: ${discountedTotalCost.toFixed(2)} AZN`;
    }
}
  
  function calculateDiscountedTotalCost() {
    const totalCost = basketArr.reduce((acc, product) => {
      let discountedPrice = product.productPrice;
      if (product.Productcount >= 5) {
        discountedPrice = product.productPrice * 0.8;
      }
      return acc + discountedPrice * product.Productcount;
    }, 0);
  
    return totalCost;
}

  

getProducts()
