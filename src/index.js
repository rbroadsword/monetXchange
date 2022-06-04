//for UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Monet from './js/function.js';

function getElements(response){
  if (response.result === "success") {
    $('.conversionRate').text(`The coversion rate is: ${response.conversion_rate}`); 
    $('.conversionResult').text(`Conversion result from USD to ${country} is: ${response.conversion_result}`)
  } else {
    $('.error')
  }
} 

$(document).ready(function() {
  $('.monetForm').click(function() {
    event.preventDefault(); 
    let country = $('#currency').val(); 
    let amount = parseInt($('#amount').val()); 
    console.log("Coin selected is " + country); 
    console.log("Amount: " + amount);
    Monet.getMonet(country, amount)
      .then(function(response) {
        getElements(response);
      });
  });
}); 