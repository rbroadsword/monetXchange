//for UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $('.monetForm').click(function() {
    event.preventDefault(); 
    let coin = $('#currency').val(); 
    let amount = parseInt($('#amount').val()); 
    console.log("Coin selected is " + coin); 
    console.log("Amount: " + amount); 
  });
}); 