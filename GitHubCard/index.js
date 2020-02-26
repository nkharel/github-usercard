/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/nkharel')
  //  .then((response) => { 
  //   response.data.message.forEach((gitUrl) => {
  //     let newGitCard = GitCard(gitUrl);
  //     cards.appendChild(newGitCard)
  //   })
  // })
  // .catch((err) => { 
  //   console.log(err) 
  // })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function GitCard(gitUrl) {
const newCard = document.createElement("div");
  newCard.classList.add("card");
  
  const newImage = document.createElement("img");
  newImage.src = "";

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  
  const hName = document.createElement("h3");
  hName.classList.add("name")
  hName.textContent = "users name";

  const uName = document.createElement("p")
  uName.classList.add("username")
  uName.textContent = "users user name";

  const Location = document.createElement("p");
  Location.textContent = "users location";

  const Profile = document.createElement("p");
  Profile.textContent = "<a> </a>";

  const Followers = document.createElement("p");
  Followers.textContent = "";

  const Following = document.createElement("p");
  Following.textContent = "";

  const Bio = document.createElement("p");
  Bio.textContent = "";
  newCard.appendChild(newImage);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(hName);
  cardInfo.appendChild(uName);
  cardInfo.appendChild(Location);
  cardInfo.appendChild(Profile);
  cardInfo.appendChild(Followers);
  cardInfo.appendChild(Following);
  cardInfo.appendChild(Bio);

  return newCard;

  console.log(newCard);

}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
