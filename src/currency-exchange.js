export default class CurrencyExchange {  
    static getCurrency() {
      return fetch(`https://v6.exchangerate-api.com/v6/2a834140e17a30255502e3de/latest/USD`)
        .then(function(response) {
          if (!response.ok) {
            const errorMessage = `${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
          } else {
            return response.json();
          }
        })      
        .catch(function(error) {
          return error;
        });
    }
  }