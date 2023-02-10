import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange';

// Business Logic

function getCurrency() {
  CurrencyExchange.getCurrency(currency)
    .then(function(response) {
      if (response) {
        printElements(response, currency);
      } else {
        printError(response, currency);
      }
    });
}

// UI Logic

function printElements(response, currency) {
  document.querySelector('#showResponse').innerText = `The currency is ${currency} and the exchange rate is ${response.}%.
  The temperature in Kelvins is ${response.main.temp} degrees.`;
}

function printError(error, city) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather(city);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});