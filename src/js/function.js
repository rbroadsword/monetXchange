export default class Monet {
  static getMonet(country, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${country}/${amount}`)
      .then(function(response) {
        console.log("line 5: ", response);
        if (!response.ok) {
          console.log("line 7 crypto.js: " , response);
          throw Error(response.statusText); 
        }
        return response.json();
      })
      .catch(function(error) {
        console.log("line 13 crypto.js: " + error); 
        return error; 
      }); 
  }
}
