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
        })
        .catch(function (error) {
            printError(error);
        });
}

// UI Logic

function printElements(response) {
    //getting dollar ammount
    const dollarAmount = document.querySelector('#dollar-amount').value;
    
    let exchangedCurrencyValue;
    let foreignCurrency = document.getElementById("select-foreign-currency").value;
    if (foreignCurrency !== null) {
        exchangedCurrencyValue = Math.round((response.conversion_rates[foreignCurrency] * dollarAmount) * 100) / 100
    } else {
        printError();
    }


    //printing results
    document.querySelector('#show-response').innerText = "From USD to " + foreignCurrency + " and the amount in " + foreignCurrency + " is: " + exchangedCurrencyValue;

}

function printError(error) {
    document.querySelector('#show-response').innerText = `There was an error accessing exchange data ${error}`;
}

function handleFormSubmission(event) {
    event.preventDefault();
    getCurrency();
}

window.addEventListener("load", function () {
    document.querySelector('form').addEventListener("submit", handleFormSubmission);
});