const detailsContainer = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;


async function fetchRecipe() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        document.title = `${details.drinks[0].strDrink}`;

        console.log(details);

        createHtml(details);
      
    }

    catch(error) {
        console.log(error);
    }
}


fetchRecipe();

function createHtml(details) {
    detailsContainer.innerHTML = 
    `<h2>${details.drinks[0].strDrink}</h2>
    <img src="${details.drinks[0].strDrinkThumb}">
    <p>Glass: ${details.drinks[0].strGlass}</p>
    <p>Ingredients: ${details.drinks[0].strIngredient1}, ${details.drinks[0].strIngredient2}, ${details.drinks[0].strIngredient3}, ${details.drinks[0].strIngredient4}</p>
    <p>Instructions: ${details.drinks[0].strInstructions}</p>
    `;
}

