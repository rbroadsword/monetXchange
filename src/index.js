//for UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Monet from './js/function.js';

function clearForm(){
  $('.amount').val(""); 
}

function getElements(response){
  if (response.result === "success") {
    $('.output').show(); 
    $('.conversionRate').text(`The coversion rate is: ${response.conversion_rate}`); 
    $('.conversionResult').text(`Conversion result from USD to ${response.target_code} is: ${response.conversion_result}`);
  } else {
    $('.error').text(`There was an error: ${response}`); 
  }
} 

$(document).ready(function() {
  $('.monetForm').click(function() {
    event.preventDefault(); 
    let country = $('#currency').val(); 
    let amount = parseInt($('.amount').val()); 
    clearForm(); 
    if (amount <= 0) {
      $('.output').hide(); 
      $('.error').hide(); 
      $('.invalidNumber').text(`Error! Enter a number greater than 0`); 
    }
    if (country === 'other'){
      $('.output').hide(); 
      $('.error').hide(); 
      $('.invalidCurrency').text(`Error! Please select a legitamite currency`); 
    }
    Monet.getMonet(country, amount)
      .then(function(response) {
        getElements(response);
      });
  });
}); 