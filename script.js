const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const homeKitchenData = [
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza.png"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza2.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza4.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza5.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza6.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza7.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza8.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza9.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza10.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza11.svg"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza.png"
  },

  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    time: "50-79 min",
    img: "./assets/pizza2.svg"
  },
];

const homeKitchenContainer = document.querySelector(
  ".home-kitchen .product-grid"
);

homeKitchenData.forEach((item) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  productElement.innerHTML = `
      <img src=${item.img} alt="${item.name}">
      <div class="product-info">
       <h3>${item.name}</h3>
      <p>${item.price}</p>
      </div>
      
      <div class="rating-time-add">
      <div class="rating-time">
      <div class="rating-box">
      <div class="rating-inner">
      <img src="/assets/star-filled.svg"></img>
      <div class="rating">${item.rating}</div>
      </div>
      </div> 
      <div class="time">${item.time}</div>
      </div>

      <img src="/assets/add-to-cart.svg">
      </div>
      
      
      </div>
      
    `;

  homeKitchenContainer.appendChild(productElement);
});

// const popularItemsData = [
//     {
//         name: "Home made pizza",
//         price: "₹190",
//         rating: 4.7,
//         time: "50-79 min",
//         img: "./assets/popular1.svg"
//       },
    
//       {
//         name: "Tandoori Chicken",
//         price: "₹190",
//         rating: 4.7,
//         time: "50-79 min",
//         img: "./assets/popular2.svg"
//       },
    
//       {
//         name: "Chilli Chicken",
//         price: "₹190",
//         rating: 4.7,
//         time: "50-79 min",
//         img: "./assets/popular3.svg"
//       },

//       {
//         name: "Home made pizza",
//         price: "₹190",
//         rating: 4.7,
//         time: "50-79 min",
//         img: "./assets/pizza2.svg"
//       }
// ]

// const carouselContainer = document.querySelector(".popular-items .carousel");

// popularItemsData.forEach((item) => {
//   const itemElement = document.createElement("div");
//   itemElement.classList.add("item");


//   itemElement.innerHTML = `
//     <img src=${item.img} alt="${item.name}">
//       <div class="product-info">
//        <h3>${item.name}</h3>
//       <p>${item.price}</p>
//       </div>
      
//       <div class="rating-time-add">
//       <div class="rating-time">
//       <div class="rating-box">
//       <div class="rating-inner">
//       <img src="/assets/star-filled.svg"></img>
//       <div class="rating">${item.rating}</div>
//       </div>
//       </div> 
//       <div class="time">${item.time}</div>
//       </div>

//       <img src="/assets/add-to-cart.svg">
//       </div>
      
      
//       </div>
      
//     `;

//   carouselContainer.appendChild(itemElement);
// });

const popularItemsData = [
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      img: "./assets/popular1.svg",
    },
    {
      name: "Tandoori Chicken",
      price: "₹184",
      rating: 4.3,
      time: "15-29 min",
      img: "./assets/popular2.svg",
    },
    {
      name: "Chilli Chicken",
      price: "₹116",
      rating: 4.1,
      time: "30-40 min",
      img: "./assets/popular3.svg",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      img: "./assets/pizza2.svg",
    },
  ];
  
  const carouselContainer = document.querySelector(".popular-items .carousel");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  
  // Populate the carousel
  popularItemsData.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
  
    itemElement.innerHTML = `
      <img src=${item.img} alt="${item.name}">
      <div class="product-info">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
      <div class="rating-time-add">
        <div class="rating-time">
          <div class="rating-box">
            <div class="rating-inner">
              <img src="/assets/star-filled.svg" alt="star" />
              <div class="rating">${item.rating}</div>
            </div>
          </div>
          <div class="time">${item.time}</div>
        </div>
        <img class="add" src="/assets/add-to-cart.svg" alt="add-to-cart" />
      </div>
    `;
  
    carouselContainer.appendChild(itemElement);
  });
  
  // Arrow functionality
  const scrollAmount = 300;
  
  rightArrow.addEventListener("click", () => {
    carouselContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  
  leftArrow.addEventListener("click", () => {
    carouselContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  

const cartIcon = document.querySelector(".cart .cart-img");
const modal = document.getElementById("cart-modal");
const closeModalButton = document.getElementById("close-modal");

cartIcon.addEventListener("click", () => {
  modal.style.display = "flex"; // Show modal
  document.body.style.overflow = "hidden"; // Disable scrolling
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none"; // Hide modal
  document.body.style.overflow = "auto"; // Enable scrolling
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide modal
    document.body.style.overflow = "auto"; // Enable scrolling
  }
});







const openModalButton1 = document.getElementById("dish-modal"); // Button that opens the modal
const closeModalButton1 = document.getElementById("close-modal1"); // Button that closes the modal
const modal1 = document.getElementById("dish-modal1"); // Modal element

// Open Modal
openModalButton1.addEventListener("click", () => {
  modal1.style.display = "flex"; // Correct reference to 'modal1'
  document.body.classList.add("no-scroll"); // Prevent scrolling
});

// Close Modal
closeModalButton1.addEventListener("click", () => {
  modal1.style.display = "none"; // Correct reference to 'modal1'
  document.body.classList.remove("no-scroll"); // Enable scrolling
});

// Close Modal When Clicking Outside the Content
window.addEventListener("click", (event) => {
  if (event.target === modal1) {
    modal1.style.display = "none"; // Correct reference to 'modal1'
    document.body.classList.remove("no-scroll");
  }
});
