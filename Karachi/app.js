function foodSearchHandler(){
    const menuItems =  document.getElementById('menuItems');
    const foodSearchBar = document.getElementById('foodSearchBar');
    const inputVal = foodSearchBar.value;
    if(inputVal == ''){

        resTaurentRecipe()
    }else{
        menuItems.innerHTML = ''
        resTaurentRecipe(inputVal)
    }
}





const resTaurentRecipe = (items = 'cake') => {
    const promise = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search= ${items} `);
    console.log(promise);
    promise.then((response) => {
        console.log(response);
        return response.json()
    })
    .then((items) => {
        console.log(items);
        recipeFunc(items)
    })
}
resTaurentRecipe('cake')

function recipeFunc(data){
    const menuItems = document.getElementById('menuItems');
    const recipeItems = data.data.recipes.slice(0, 28)
   console.log(recipeItems);
   recipeItems.forEach(element => {
     console.log(element);
     let text;
     text = `<div class="card " style="width: 16rem;" id="items">
     <img src="${element.image_url}" class="food-image card-img-top" alt="...">
     <div class="card-body">
       <p class="card-text">${element.title}</p>
       
     </div>
 </div>
     `
     menuItems.innerHTML += text
   });
   
}

