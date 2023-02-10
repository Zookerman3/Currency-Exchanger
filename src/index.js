import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange';

// Business Logic

function getCurrency() {
  CurrencyExchange.getCurrency()
    .then(function(response) {
      if (response) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}

// UI Logic

function printElements(response) {
    //getting dollar ammount
    const dollarAmount = document.querySelector('#dollar-amount').value;

    //setting exchange rates to variables
    let euro = response.conversion_rates.EUR;
    let peso = response.conversion_rates.MXN;
    let yen = response.conversion_rates.JPY;
    let won = response.conversion_rates.KRW;
    let rubles = response.conversion_rates.RUB;

    let foreignCurrency = document.getElementById("select-foreign-currency").value;

    


    //printing results
  document.querySelector('#show-response').innerText = `The currency is USD and the exchange to is ${response.conversion_rates.AED}.`;

}

function printError(error) {
  document.querySelector('#show-response').innerText = `There was an error accessing the weather data for ${error}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const dollarAmount = document.querySelector('#dollar-amount').value;
  console.log(dollarAmount);
  document.querySelector('#dollar-amount').value = null;
  getCurrency();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});