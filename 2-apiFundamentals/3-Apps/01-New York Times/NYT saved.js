const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = '86d0f2bd56e2423ea4a1b566d70d68be'; //2
let url; //3

// Search
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

// Results Navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// Results Section
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' +searchTerm.value;
    fetch(url)
    .then(function(result) {
        if(startDate.value !== '') {
            url += '&begin_date=' + startDate.value;
        };
        if(endDate.value !== '') {
            url += '&end_date=' + endDate.value;
        };
        return result.json();
        }).then(function(json) {
            displayResults(json);
        });
    }

    function nextPage(e) {
        pageNumber++;
        fetchResults(e);
      };
      
      function previousPage(e) {
        if(pageNumber > 0) {
          pageNumber--;
        } else {
          return;
        }
        fetchResults(e);
      };
      
    function displayResults(json) {
        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }
      
        var articles = json.response.docs;
      
        if(articles.length === 10) {
          nav.style.display = 'block';
        } else {
          nav.style.display = 'none';
        }
      
        if(articles.length === 0) {
          var para = document.createElement('p');
          para.textContent = 'No results returned.'
          section.appendChild(para);
        } else {
          for(var i = 0; i < articles.length; i++) {
            var article = document.createElement('article');
            var heading = document.createElement('h2');
            var link = document.createElement('a');
            var img = document.createElement('img');
            var para1 = document.createElement('p');
            var para2 = document.createElement('p');
            var clearfix = document.createElement('div');
      
            var current = articles[i];
            console.log(current);
      
            link.href = current.web_url;
            link.textContent = current.headline.main;
            para1.textContent = current.lead_paragraph;
            para2.textContent = 'Keywords: ';
            for(var j = 0; j < current.keywords.length; j++) {
              var span = document.createElement('span');
              span.textContent += current.keywords[j].value + ' ';
              para2.appendChild(span);
            }
      
            if(current.multimedia.length > 0) {
              img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
              img.alt = current.headline.main;
            }
      
            clearfix.setAttribute('class','clearfix');
      
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            article.appendChild(para2);
            article.appendChild(clearfix);
            section.appendChild(article);
          }
        }
      };
