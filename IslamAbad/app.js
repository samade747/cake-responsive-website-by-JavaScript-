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
foodSearchHandler()
 async function resTaurentRecipe(items = 'cake') {
   try{ 
    await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search= ${items} `)
    .then((response) => {
        console.log(response);
        if(response.ok){
            console.log('Successful');
            return response.json()
        }else{
            console.log('Unsuccessful');
        }
    })
    .then((items) => {
        console.log(items);
        recipeFunc(items)
    })
}catch(err){
    console.log(err.message);
}
}


const recipeFunc =async function(data){
    const menuItems =  document.getElementById('menuItems');
    const recipeItems = await data.data.recipes.slice(0, 85)
   console.log(recipeItems);
   const filteredRecipies = recipeItems.filter((item) =>{
       if(item.image_url == 'test23'){
        return false
       }else{
        return true
       }

   }
    )
    filteredRecipies.forEach(element => {
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

