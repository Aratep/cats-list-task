import axios from "axios";

export const catsApi = {
    fetchCategories: () => axios.get("https://api.thecatapi.com/v1/categories"),
    fetchCats: (page: number, catId: number) => axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${catId}`)
}