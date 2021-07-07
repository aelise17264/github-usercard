/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
const cardContainer = document.querySelector('.cards')

const followersArray = [
  'aelise17264',
  "tetondan",
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];


followersArray.forEach(item => {
  let myUrl = `https://api.github.com/users/${item}`
  console.log(myUrl)

axios.get(myUrl)
.then(element => {
  //console.log(element.data.name)
  let envelope = element.data
  cardContainer.appendChild(cardMaker(envelope))
   
})
.catch(error => {
  console.log('Error, something went wrong')
})

})

let followerUrl = 'https://api.github.com/users/aelise17264/followers'

axios.get(followerUrl)
.then(element => {
  console.log(element.data[0])
   let newCard = element.data[0]
  cardContainer.appendChild(cardMaker(newCard))
   
})
.catch(error => {
  console.log('Error, something went wrong')
})



function cardMaker(element){
      let card = document.createElement('div')
      let image = document.createElement('img')
      let cardInfo = document.createElement('div')
      let myName = document.createElement('h3')
      let userName = document.createElement('p')
      let location = document.createElement('p')
      let profile = document.createElement('p')
      let address = document.createElement('a')
      let followers = document.createElement('p')
      let following = document.createElement('p')
      let bio = document.createElement('p')
  
      card.appendChild(image)
      card.appendChild(cardInfo)
      cardInfo.appendChild(myName)
      cardInfo.appendChild(userName)
      cardInfo.appendChild(location)
      cardInfo.appendChild(profile)
      profile.appendChild(address)
      cardInfo.appendChild(followers)
      cardInfo.appendChild(following)
      cardInfo.appendChild(bio)
  
      card.className = 'card'
      cardInfo.className = 'card-info'
      myName.className = 'name'
      userName.className = 'username'
  
      myName.textContent = element.name
    image.src = element.avatar_url
    userName.textContent = element.login
    location.textContent = element.location
    profile.textContent = `Profile: ${element.url}` 
    followers.textContent = `Followers: ${element.followers}`
    following.textContent = `Following: ${element.following}`
     bio.textContent = element.bio

   return card
}



// cardContainer.appendChild(cardMaker(myUrl))


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
