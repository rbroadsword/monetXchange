export default class Monet {
  static getMonet(country, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${country}/${amount}`)
      .then(function(response) {
        //console.log("line 5: " + response.status);  this returns 403
        //console.log(response["error-type"]);  this returns undefined
        if (!response.ok) {
          throw Error(response.result); 
        }
        return response.json();
      })
      .catch(function(error) {
        //console.log("line 12 function.js: " + error); this returns Error
        return error; 
      }); 
  }
}
