/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/nkharel`)
  .then(res => {
    console.log(res.data)
    createCard(res.data)
  })
  .catch(err => {
    return(err)
  })
  


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

axios.get(`https://api.github.com/users/justsml`)
  .then(res => {
    console.log(res.data)
    createCard(res.data)
  })
  .catch(err => {
    return(err)
  })
  

axios.get(`https://api.github.com/users/luishrd`)
  .then(res => {
    console.log(res.data)
    createCard(res.data)
  })
  .catch(err => {
    return(err)
  })
  

axios.get(`https://api.github.com/users/tetondan`)
  .then(res => {
    console.log(res.data)
    createCard(res.data)
  })
  .catch(err => {
    return(err)
  })
  

axios.get(`https://api.github.com/users/dustinmyers`)
  .then(res => {
    console.log(res.data)
    createCard(res.data)
  })
  .catch(err => {
    return(err)
  })
  

axios.get(`https://api.github.com/users/bigknell`)
  .then(res => {
    console.log(res.data)
    createCard(res.data)
  })
  .catch(err => {
    return(err)
  })
  

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

createCard = (cardInfo) => {
  card = document.createElement('div')
  cardImg = document.createElement('img')
  cardInner = document.createElement('div')
  cardHeader = document.createElement('h3')
  cardUsername = document.createElement('p')
  cardLocation = document.createElement('p')
  cardProfile = document.createElement('p')
  cardUrl = document.createElement('a')
  cardFollowers = document.createElement('p')
  cardFollowing = document.createElement('p')
  cardBio = document.createElement('p')

  cardInner.appendChild(cardHeader)
  cardInner.appendChild(cardUsername)
  cardInner.appendChild(cardLocation)
  cardInner.appendChild(cardProfile)
  cardInner.appendChild(cardFollowers)
  cardInner.appendChild(cardFollowers)
  cardInner.appendChild(cardFollowing)
  cardInner.appendChild(cardBio)
  card.appendChild(cardImg)
  card.appendChild(cardInner)

  cardHeader.textContent = cardInfo.name
  console.log(cardInfo.name)
  cardUsername.textContent = cardInfo.login
  cardLocation.textContent = `Location: ${cardInfo.location}`
  cardProfile.textContent = `Profile: `
  cardProfile.appendChild(cardUrl)
  cardUrl.textContent = cardInfo.html_url
  cardFollowers.textContent = `Followers: ${cardInfo.followers}`
  cardFollowing.textContent = `Following: ${cardInfo.following}`
  cardBio.textContent = `Bio: ${cardInfo.bio}`
  
  cardImg.setAttribute('src', cardInfo.avatar_url)
  cardImg.setAttribute('alt', `${cardInfo.name}'s photo`)
  cardUrl.setAttribute('href', cardInfo.html_url)

  card.classList.add('card')
  cardInner.classList.add('card-info')
  cardHeader.classList.add('name')
  cardUsername.classList.add('username')

  const cards = document.querySelector('.cards')
  cards.appendChild(card)
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

