export default class CurrencyExchange {  
    static getCurrency(currency) {
      return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
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