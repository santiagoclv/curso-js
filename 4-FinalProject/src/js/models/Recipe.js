import axios from "axios";

export default class Recipe {
    constructor(query){
        this.query = query;
    }

    async getResult(){
        try {
            const result = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            return result?.data?.recipes ?? null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};
