import {Influencer} from "../models/influencer.modal";
import {getInfluncersFromStorage, saveInfluncers} from "../storages/influencer.storege"

// ENV file
require('dotenv').config();

const csv = require('csvtojson');

const csvFilePath = process.env.CSV || './data/instagram_influencers.csv';

export async function setUpInfluencers() {
    const influencers: Influencer[] = await getInfluncersFromCSV();
    await saveInfluncers(influencers);
}
export async function getInfluncers() {
    return await getInfluncersFromStorage();
}

export async function getInfluncersByCategory(category: string) {
    const filter = {category_1: category};
    const sort = {followers: -1};
    return await getInfluncersFromStorage(filter, sort);
}

export async function getInfluncersByCounty(country: string) {
    const filter = {audienceCountry: country};
    const sort = {followers: -1};
    return await getInfluncersFromStorage(filter, sort);
}

async function getInfluncersFromCSV() {
    console.log(csvFilePath);
    const csvData = await csv().fromFile(csvFilePath);

    if (!csvData) return

    return parseCsvDataToObject(csvData);
}

function parseCsvDataToObject(data: any[]): Influencer[] {
    // Fetching the all data from each row
    const result: Influencer[] = [];
    data.forEach(obj => {
        const oneRow: Influencer  = {
            name: obj["Influencer insta name"],
            ig_name: obj["instagram name"],
            category_1: obj["category_1"],
            category_2: obj["category_2"],
            followers: parseStringQuantityToNumber(obj["Followers"]),
            audienceCountry: obj["Audience country(mostly)"],
            authenticEngagement: parseStringQuantityToNumber(obj["Authentic engagement\r\n"]),
            engagementAvg: parseStringQuantityToNumber(obj["Engagement avg\r\n"]),
        };
        result.push(oneRow);
    })

    return result;
}

function parseStringQuantityToNumber(quantity: string): number {
    switch (quantity.charAt(quantity.length - 1)) {
        case 'M':
            return parseFloat(quantity) * 1000000;
        case 'K':
            return parseFloat(quantity) * 1000;
        default:
            return parseFloat(quantity);
    }
}
