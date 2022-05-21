import axios from "axios";

const APIData = axios.create({
    baseURL: 'http://localhost:4000/'
});

export async function getAllInfluencers() {
    const response = await APIData.get(`influencers`);
    return response.data;
}

export async function getAllInfluencersForCategory(category: string) {
    const response = await APIData.get(`/influencers/top/category/${category}`);
    return response.data;
}

export async function getAllInfluencersForCountry(country: string) {
    const response = await APIData.get(`/influencers/top/country/${country}`);
    return response.data;
}
