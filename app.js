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
// Function to get the data, this function takes a url as a parameter and prints the data based on the parameter
async function getData(url) {

    try {

        // here, we fetch on the url to get the data, the data comes in the form of response, so we store it.
        // if any error is caught, the catch block will take care of it.
      const response = await fetch(url);
  
      if (!response.ok) {
        // if error is there, this block will run
        throw new Error("Network response was not ok");
      }
  
  
    // here, we print to see how a response looks like
    console.log(response);
      //   after we get the response, we convert it into json to read and work on it
      const data = await response.json();
    //   we print the data
      console.log("Countries data:", data);
    } catch (error) {
        // if error is there, this block will run
      console.error("Fetch error:", error);
    }
  }

// uncomment to call the function
//   getData(getByCapital);


  
 

  