const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const resultsContainer = document.querySelector(".results");

async function fetchDrinks() {

    const response = await fetch(url);

    const results = await response.json();

    const drinks = results.drinks;

    console.log(results);

    for (let i = 0; i < drinks.length; i++) {
        
        console.log(drinks[i].strDrink);

        resultsContainer.innerHTML += 
        `<div class="result">
            <h2> ${drinks[i].strDrink}</h2>
            <p>${drinks[i].strGlass}</p>
            <img src="${drinks[i].strDrinkThumb}">
            <a href="details.html?id=${drinks[i].idDrink}"><p>See full recipe</p>
        </div>`;
    }
}

fetchDrinks();