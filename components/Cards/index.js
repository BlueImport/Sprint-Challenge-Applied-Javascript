// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


//makes the query selector main div
const cardContainer = document.querySelector('.cards-container')

//get the axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    response.data.articles.javascript.forEach(article => {
        cardsContainer.appendChild(techCards(article))
    });
    response.data.articles.bootstrap.forEach(article => {
        cardsContainer.appendChild(techCards(article))
    });
    response.data.articles.technology.forEach(article => {
        cardsContainer.appendChild(techCards(article))
    });
    response.data.articles.jquery.forEach(article => {
        cardsContainer.appendChild(techCards(article))
    });
    response.data.articles.node.forEach(article => {
        cardsContainer.appendChild(techCards(article))
    });
})


//creating the main function
function theCards(data){

//creates the elements
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const authorImgContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardAuthor = document.createElement('span');

//adds class to elements
    card.classList.add('card');
    cardHeadline.classList.add('headline'),
    authorImgContainer.classList.add('author'),
    imgContainer.classList.add('img-container')



}
