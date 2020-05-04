import axios from "axios";

export default class Search {
    constructor(query){
        this.query = query;
        this.recipes = null;
    }

    async getResult(){
        try {
            const result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.recipes = result?.data?.recipes ?? null;
        } catch (error) {
            console.error(error);
        }
        return this.recipes;
    }
};