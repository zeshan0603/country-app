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

// //
// fetch(getAllCountries)
// .then((res) => res.json())
// .then((data) => console.log(data));

// This is the same as the above
// axios.get(getAllCountries).then((res) => console.log(res.data));
