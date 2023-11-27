// WEBSITE URL
const apiURL = "https://restcountries.com/";
// TRY TO KEEP THE NAME IN SMALL LETTERS
const name = "egypt";
const currency = "cop";
const language = "english";
const capital = "delhi";
// COMMON ENDPOINTS
const getAllCountries = "https://restcountries.com/v3.1/all";
const getByName = `https://restcountries.com/v3.1/name/${name}`;
const getByCurrencyCode = `https://restcountries.com/v3.1/currency/${currency}`;
const getByLanguage = `https://restcountries.com/v3.1/lang/${language}`;
const getByCapital = `https://restcountries.com/v3.1/capital/${capital}`;

// Fetching the data and adding the cards
const cardSection = document.getElementById("card-section");
(async () => {
  const response = await axios.get(getAllCountries);
  const data = response.data;
  console.log(data);

  for (let i = 1; i < data.length - 1; i++) {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card-container">
      <img src="${data[i].flags.png}"/>
      <h1 class="card-name">${data[i].name.common}</h1>
    </div>`;

    cardSection.appendChild(card);
  }
})();

// Hamburger Menu (navbar)
const hambMenu = document.querySelector(".hamburger");
const hambMenuX = document.querySelector(".x-hamb");
const ulNav = document.querySelector(".active-nav-menu");
const navBar = document.getElementById("nav");
const navBrand = document.getElementById("navbrand");
const mainInput = document.querySelector(".main-input");

// Opens the hamb menu
hambMenu.addEventListener("click", () => {
  ulNav.style.display = "flex";
  ulNav.style.right = "0";
});

// Closes the hamb menu
hambMenuX.addEventListener("click", () => {
  ulNav.style.right = "-140%";
});

// Adds shadow to navbar when scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBar.style.boxShadow = "0 0 4px black";
  } else {
    navBar.style.boxShadow = "none";
  }
});

// Toggles Dark/Light Theme
navBrand.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("active");
});

// Finding the country / card you want

function handleChange(event) {
  console.log("hi");
  const cards = document.querySelectorAll(".card-container");
  const cardName = document.querySelectorAll(".card-name");

  cards.forEach((element, index) => {
    element.style.display = "none";

    if (
      mainInput.value.toLowerCase() ===
      cardName[index].textContent.toLowerCase()
    ) {
      element.style.display = "block";
    }
  });

  if (mainInput.value === "") {
    cards.forEach((element, index) => {
      element.style.display = "block";
      element.style.position = "static";
      element.style.transform = "translateX(0)";
    });
  }
  
  if (mainInput.value !== "") {
    cards.forEach((element) => {
      element.style.position = "absolute";
      element.style.left = "50%";
      element.style.top = "100px";
      element.style.transform = "translateX(-50%)";
    });
  }
}
