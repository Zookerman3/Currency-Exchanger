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
  document.querySelector('#show-response').innerText = `The currency is USD and the exchange to is ${response.result}.`;
}

function printError(error, city) {
  document.querySelector('#show-response').innerText = `There was an error accessing the weather data for ${city}: 
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