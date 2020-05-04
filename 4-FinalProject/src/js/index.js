import Search from './models/Search';
import { searchForm, renderLoader, clearLoader, searchResult } from "./views/base";
import { getValue, renderResult, clearResult } from "./views/search";

const state = {};

const controlSearch = async (query) => {
    if(!query) return;
    const search = new Search(query);
    clearResult();
    renderLoader(searchResult);
    const recipe = await search.getResult();
    state.searchResult = recipe;
    setTimeout( () => clearLoader(searchResult), 0)
    renderResult(recipe);
}

searchForm.addEventListener( 'submit', event => {
    event.preventDefault();
    const queryValue = getValue();
    controlSearch(queryValue);
});