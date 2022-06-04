# monetXchange

#### By: Ryan Broadsword

#### Application allows you to select a currency from a drop down list and see the conversion rate from USD. 

## Technologies Used

* HTML
* CSS 
* Jquery
* Bootstrap
* Java Script
* Babel 7.6.4
* Webpack 4.39.3
* webpack-cli 3.3.8
* webpack-dev-server 3.8.0
* dotenv-webpack 2.0.0
* eslint 6.3.0
* eslint-loader 3.0.0
* css-loader 3.2.0
* file-loader 1.1.6
* html-loader 0.5.5
* html-webpack-plugin 3.2.0
* style-loader 1.0.0
* node.js
* popper.js 1.16.1


## Description 

For this section's project, you'll create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API.

Navigate to the site to get a free key. Note that while the "Open Access" plan doesn't require an API key, it is heavily rate limited. You are expected to get an API key through the "Free Plan" - (and to protect that key in your application using environmental variables).

Here are the following things your application must do. Read through the list carefully to make sure you add all needed functionality!

A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won.
Users should be able to convert U.S. currency into at least 5 other types of currency.
If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

## Setup/Installation Requirements

### Create an API Key
* You will need to make an account and get an API key. The "Free Plan" allows for 2000 API calls per month.
* Visit the [ExchangeRate-API](https://www.exchangerate-api.com/) site. Input your email address and click the "Get Free Key" button. 
* You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
* At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.

* clone repository
* open in vs code
* open terminal
* in terminal run "npm i"
* add .env to your .gitignore file
* push your .gitignore to your github
* in terminal create your env file to store your API key: "touch .env"
* Add the following line of code to the .env file API_KEY=insert-your-API-key-here where you substitute the API key you got by following the instructions above for the "insert-your-API-key-here". The following is an example using a fake API key: API_KEY=1234567890
* in terminal run "npm run build"
* in terminal run "npm run start" to launch the browser
* 

## Known Bugs

* Error message is undefined
* Background music 404 not found

## License

Not currently licensed 

Copyright (c) June 4 2022, by Ryan Broadsword 
