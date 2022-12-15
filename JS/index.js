


document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.add('active');
}

document.querySelector("#close").onclick = () =>{
    document.querySelector("#search-form").classList.remove("active");
}

var counter =1;
setInterval(() => {
   document.getElementById("radio" + counter).checked = true;
   counter++;
   if (counter > 4){
    counter = 1
   }
}, 5000);


fetch("http://localhost:3000/hotels")
.then(response =>response.json())
.then(hotels)

    function hotels(bigHotels) {
        bigHotels.map(user=>{
            const character = document.querySelector(".grid")
                             return character.insertAdjacentHTML("afterbegin",`  <div class="grid-item">
                             <div class="card">
                                 <img class="card-img" src="${user.poster}" alt="">
                                 <div class="card-content">
                                     <h1 class="card-header">${user.name} </h1>
                                     <p class="card-text">
                                     Ratings:
                                     <span id="ratings">
                                     <span class="fa fa-star  checked" ></span>
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span>
                                     </span> 
                                     <span>${user.rating}</span>
                                         <p>${user.location} </p>
                                         <span id="price">${user.price} <span>KES</span></span>
                                     </p>
                                     
                     
                                     <button class="card-btn">Add to Favourites<span>&nbsp;</span><i href="#" class="fas fa-heart"></i></button>
                                     <br/>
                                     <button class="card-btn">Add to Cart<span>&nbsp;</span><i href="#" class="fas fa-shopping-cart"></i></button>
                                 </div>
                             </div>
                         </div>
            `)})
                }



fetch("http://localhost:3000/restaurants")
.then(response =>response.json())
.then(restaurant);

    function restaurant(bigRestaurant) {
        bigRestaurant.map(user=>{
            const character = document.querySelector(".grid1")
                             return character.insertAdjacentHTML("afterbegin",`  <div class="grid-item">
                             <div class="card">
                                 <img class="card-img" src="${user.poster}" alt="">
                                 <div class="card-content">
                                     <h1 class="card-header">${user.name} </h1>
                                     <p class="card-text">
                                     Ratings:
                                     <span id="ratings">
                                     <span class="fa fa-star  checked" ></span>
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span>
                                     </span> 
                                     <span>${user.rating}</span>
                                         <p>${user.location} </p>
                                         <span id="price">${user.price} <span>KES</span></span>
                                     </p>
                                     
                     
                                     <button class="card-btn">Add to Favourites<span>&nbsp;</span><i href="#" class="fas fa-heart"></i></button>
                                     <br/>
                                     <button class="card-btn">Add to Cart<span>&nbsp;</span><i href="#" class="fas fa-shopping-cart"></i></button>
                                 </div>
                             </div>
                         </div>
            `)})
                }




fetch("http://localhost:3000/coffee")
.then(response =>response.json())
.then(coffee);

    function coffee(cShop) {
        cShop.map(user=>{
            const character = document.querySelector(".grid2")
                             return character.insertAdjacentHTML("afterbegin",`  <div class="grid-item">
                             <div class="card">
                                 <img class="card-img" src="${user.poster}" alt="">
                                 <div class="card-content">
                                     <h1 class="card-header">${user.name} </h1>
                                     <p class="card-text">
                                     Ratings:
                                     <span id="ratings">
                                     <span class="fa fa-star  checked" ></span>
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span>
                                     </span> 
                                     <span>${user.rating}</span>
                                         <p>${user.location} </p>
                                         <span id="price">${user.price} <span>KES</span></span>
                                     </p>
                                     
                     
                                     <button class="card-btn">Add to Favourites<span>&nbsp;</span><i href="#" class="fas fa-heart"></i></button>
                                     <br/>
                                     <button class="card-btn">Add to Cart<span>&nbsp;</span><i href="#" class="fas fa-shopping-cart"></i></button>
                                 </div>
                             </div>
                         </div>
            `)})
                }







fetch("http://localhost:3000/bars")
.then(response =>response.json())
.then(bars);

    function bars(bar) {
        bar.map(user=>{
            const character = document.querySelector(".grid3")
                             return character.insertAdjacentHTML("afterbegin",`  <div class="grid-item">
                             <div class="card">
                                 <img class="card-img" src="${user.poster}" alt="">
                                 <div class="card-content">
                                     <h1 class="card-header">${user.name} </h1>
                                     <p class="card-text">
                                     Ratings:
                                     <span id="ratings">
                                     <span class="fa fa-star  checked" ></span>
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span>
                                     </span> 
                                     <span>${user.rating}</span>
                                         <p>${user.location} </p>
                                         <span id="price">${user.price} <span>KES</span></span>
                                     </p>
                                     
                     
                                     <button class="card-btn">Add to Favourites<span>&nbsp;</span><i href="#" class="fas fa-heart"></i></button>
                                     <br/>
                                     <button class="card-btn">Add to Cart<span>&nbsp;</span><i href="#" class="fas fa-shopping-cart"></i></button>
                                 </div>
                             </div>
                         </div>
            `)})
                }







fetch("http://localhost:3000/clubs")
.then(response =>response.json())
.then(clubs);

    function clubs(club) {
        club.map(user=>{
            const character = document.querySelector(".grid4")
                             return character.insertAdjacentHTML("afterbegin",`  <div class="grid-item">
                             <div class="card">
                                 <img class="card-img" src="${user.poster}" alt="">
                                 <div class="card-content">
                                     <h1 class="card-header">${user.name} </h1>
                                     <p class="card-text">
                                     Ratings:
                                     <span id="ratings">
                                     <span class="fa fa-star  checked" ></span>
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span> 
                                     <span class="fa fa-star  checked" ></span>
                                     </span> 
                                     <span>${user.rating}</span>
                                         <p>${user.location} </p>
                                         <span id="price">${user.price} <span>KES</span></span>
                                     </p>
                                     
                     
                                     <button class="card-btn">Add to Favourites<span>&nbsp;</span><i href="#" class="fas fa-heart"></i></button>
                                     <br/>
                                     <button class="card-btn">Add to Cart<span>&nbsp;</span><i href="#" class="fas fa-shopping-cart"></i></button>
                                 </div>
                             </div>
                         </div>
            `)})
                }




                







