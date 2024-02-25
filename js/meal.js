const  loadMeals = (searchText) =>{
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals ))
}

const displayMeals = (meals) =>{

    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerText = ' ';

    meals.forEach(meal =>{
        console.log(meal )
        const milDiv = document.createElement('div')
        milDiv.classList.add('col')
        milDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>     
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <button onclick="loadMealsDetail(${meal.idMeal})" type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#mealDetails">
        Details
    </button>
    </div>
        
        `
        mealsContainer.appendChild(milDiv);
    })
}

const loadMealsDetail = idMeal =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealsDetails(data))
  .catch(error =>{
       console.log(error)
  })
}

const displayMealsDetails = data =>{
    console.log(data.meals[0])
    document.getElementById('mealDetailsLabel').innerText = data.meals[0].strMeal;
    const milsDetailsBody = document.getElementById('meals-details-body')
    milsDetailsBody.innerHTML = `
    <img class="img-fluid" src ="${data.meals[0].strMealThumb}">
    <h4>country: ${data.meals[0].strArea}</h4>
    <p>country: ${data.meals[0].strIngredient4}</p>
    
    `
}





const searchMeals=()=>{
    console.log('hi i am shaoib')
    const inputSearch = document.getElementById('input-search').value
    console.log(inputSearch)
    loadMeals(inputSearch)

    inputSearch =' ';
}

loadMeals('fish');