import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange';

// Business Logic

function getCurrency() {
    CurrencyExchange.getCurrency()
        .then(function (response) {
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

    // calculating exchange and rounding to the nearest hundredth
    let exchangedCurrencyValue;
    let foreignCurrency = document.getElementById("select-foreign-currency").value;
    if (foreignCurrency === "EUR") {
        exchangedCurrencyValue = Math.round((euro * dollarAmount) * 100) / 100;
    } else if (foreignCurrency === "MXN") {
        exchangedCurrencyValue = Math.round((peso * dollarAmount) * 100) / 100;
    } else if (foreignCurrency === "JPY") {
        exchangedCurrencyValue = Math.round((yen * dollarAmount) * 100) / 100;
    } else if (foreignCurrency === "KRW") {
        exchangedCurrencyValue = Math.round((won * dollarAmount) * 100) / 100;
    } else if (foreignCurrency === "RUB") {
        exchangedCurrencyValue = Math.round((rubles * dollarAmount) * 100) / 100;
    }


    //printing results
    document.querySelector('#show-response').innerText = "From USD to " + foreignCurrency + " and the amount in " + foreignCurrency + " is: " + exchangedCurrencyValue;

}

function printError(error) {
    document.querySelector('#show-response').innerText = `There was an error accessing the weather data for ${error}: 
  ${error}.`;
}

function handleFormSubmission(event) {
    event.preventDefault();

    getCurrency();
}

window.addEventListener("load", function () {
    document.querySelector('form').addEventListener("submit", handleFormSubmission);
});