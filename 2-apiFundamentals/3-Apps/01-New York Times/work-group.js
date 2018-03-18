// Group 1
nav.style.display = 'none'; //navbar is defaulted to be off to decide to show later if we have more than 10 results.

let pageNumber = 0; //declaring page number variable and setting it to 0
// console.log('PageNumber:', pageNumber);
let displayNav = false; //declaring displayNav and setting it to false

searchForm.addEventListener('submit', fetchResults); //Setting an event to listen when submitting results.
nextBtn.addEventListener('click', nextPage); //Setting an event to listen when user clicks the button
previousBtn.addEventListener('click', previousPage); //Setting an event to listen when user clicks the previous button

function fetchResults(e) { //Building a function to fetch results to an event
  // console.log(e);
  e.preventDefault(); //Keeps the page from refreshing
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  //Using interpolation to create a target URL based on the query(endpoint)
  console.log('URL:', url); 

  if (startDate.value !== '') { //Checking to see if user input a start date value
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value; 
    //If there was a start date, we are ading the start date to the url
  }

  fetch(url) //Fetch results using our URL that was previously created
    .then(function(result) { //pull function result
      console.log(result)
      return result.json(); //returning result of fetch into javascript object notation
    })
    .then(function(json) { //pulling results from previous function
      console.log(json);
      displayResults(json);
       //Now that we have ussable information, we're putting into a function to display in the future on the page.
    })
}