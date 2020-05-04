import { searchForm, searchResultList } from "./base";

// export const adicionsita = (...args) => args?.reduce( (acc, cur) => cur + acc, 0);
// export const productito = (...args) => args?.reduce( (acc, cur) => cur * acc, 1);

export const getValue = () => {
    const formData = new FormData(searchForm);
    return formData.get('query');
};

const renderRecipie = (recipe) => {
    const mackdown = `
    <li>
        <a class="results__link" href="${recipe?.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe?.image_url}" alt="${recipe?.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe?.title} ...</h4>
                <p class="results__author">${recipe?.publisher}</p>
            </div>
        </a>
    </li>
    `;
    searchResultList.insertAdjacentHTML("beforeend", mackdown);
};

export const clearResult = () => {
    searchResultList.innerHTML = "";
};

export const renderResult = (recipes) => {
    recipes?.forEach(renderRecipie);
};