export default class Monet {
  static getMonet(country, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${country}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status); 
        }
        return response.json();
      })
      .catch(function(error) {
        return error; 
      }); 
  }
}
