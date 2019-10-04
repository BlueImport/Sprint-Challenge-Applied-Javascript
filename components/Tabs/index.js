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
.get("https://lambda-times-backend.herokuapp.com/topics")
.then(function(response) {
  // Success!
  console.log(response);
})
.catch(function(error) {
  // Error!
  console.log(error);
});

//set main query selector
const tabs = document.querySelector('.tabs');

//sets the function
function allTabs(data) {

//creates elements
const topics = document.createElement('topics');
const tab = document.createElement('div');

//adds classes
topics.classList.add('topics');
tab.classList.add('tab');

//adds text content
tab.textContent = 'topic here';

//appends the two together
topics.appendChild(tab);

console.log(topics);
return topics;
}

//attaches to website
const mainTabs = document.querySelector('.tabs');
mainTabs.appendChild(allTabs());