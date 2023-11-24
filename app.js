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

// Fetching with async and await
async function getData(url) {

    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log("Countries data:", data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  getData(getByCapital);

  
 

  