// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


//get the axios
axios
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


//set main query selector
const tabs = document.querySelector('.tabs');

//sets the function
function allTabs(data) {

//creates elements
const topics = document.createElement('topics');
// const tab = document.createElement('div');
const tab1 = document.createElement('div');
const tab2 = document.createElement('div');
const tab3 = document.createElement('div');
const tab4 = document.createElement('div');
const tab5 = document.createElement('div');

//adds classes
topics.classList.add('topics');
// tab.classList.add('tab');
tab1.classList.add('tab');
tab2.classList.add('tab');
tab3.classList.add('tab');
tab4.classList.add('tab');
tab5.classList.add('tab');


//adds text content
// tab.textContent = 'topic here';
tab1.textContent = 'Javascript';
tab2.textContent = 'Bootstrap';
tab3.textContent = 'Technology';
tab4.textContent = 'JQuery';
tab5.textContent = 'Node';

//appends the two together
// topics.appendChild(tab);
topics.appendChild(tab1);
topics.appendChild(tab2);
topics.appendChild(tab3);
topics.appendChild(tab4);
topics.appendChild(tab5);

console.log(topics);
return topics;
}

//attaches to website
const mainTabs = document.querySelector('.tabs');
mainTabs.appendChild(allTabs());