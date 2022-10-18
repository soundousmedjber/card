var names = ["kebab", "fritte oumelette","poulet panné","viande panné ", "coca","merinda","pepsi","coca zero" ]
var price = ["300da", "150da", "250da", "400da","100da", "100da", "100da", "100da"]
var description = ["food", "food","food", "food", "boisson","boisson", "boisson","boisson"]
var img = ["./drink.png","./drink.png","./drink.png","./drink.png","./drink.png","./drink.png","./drink.png","./drink.png",]
var user=[]
for (let i = 0; i < names.length; i++) {
     
    var objectuser = {
      names : names[i],
      price : price[i],
      description : description [i],
    }
    user.push(objectuser)
 console.log(user);
 var product = document.getElementById("product")
 product.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src=${img[i]} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${names[i]}</h5>
    <p class="card-text">${description[i]}</p>
    <h6>${price[i]}</h6>
    <a href="#" class="btn btn-primary">add to carte</a>
  </div>
 </div>`
}
 function ajouter(event)
 {
     event.preventDefault()
     var names = document.getElementById('names').value
     var price = document.getElementById('price').value
     var description = document.getElementById('description').value
    
     var newProduct = {
      names,
      price,
      description,
     }
     user.push(newProduct)
     var product = document.getElementById("product")
     product.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src=${img[i]} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${names[i]}</h5>
        <p class="card-text">${description[i]}</p>
        <h6>${price[i]}</h6>
        <a href="#" class="btn btn-primary">add to carte</a>
      </div>
     </div>`
 }
 
