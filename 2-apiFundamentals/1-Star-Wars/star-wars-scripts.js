var starWarsPeopleList = document.querySelector('ul');
var starWarsFilmsList = document.querySelector('ul');

fetch('https://swapi.co/api/films') 
.then(function(response) {   
    return response.json(); 
    console.log(response);
})
.then(function(json) {
    let films = json.results;
    console.log("JSON result: ", json.results[0]);
    
    // let listItem = document.createElement('button');
    // listItem.innerHTML = films.title;
    // starWarsPeopleList.appendChild(listItem);

    for(f of films) {
        let listItem = document.createElement('li');
        listItem.innerHTML = f.title;
        starWarsPeopleList.appendChild(listItem);
    }

    // addEventListener('click', (f) => {
    //     let list = document.createElement('li')
    //     // let list = document.createElement('button')
    //     list.innerHTML = f.title;
    //     starWarsPeopleList.appendChild(list)
    // })
});
// fetch('https://swapi.co/api/films/4/') 
// .then(function(response) {   
//     return response.json(); 
//     console.log(response);
// })
// .then(function(json) {
//     let films = json.results;
//     console.log(json.results);
//     for(f of films) {
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + f.title + '</p>';
//         starWarsPeopleList.appendChild(listItem);
//     }
// });