var starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.co/api/people') 
.then(function(response) {   
  return response.json(); 
  console.log(response);
})
.then(function(json) {
    let people = json.results;
    for(p of people) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
        }
    });