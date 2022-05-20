import {Request, Response} from "express";
import {
    getInfluncers,
    getInfluncersByCategory,
    getInfluncersByCounty,
    setUpInfluencers
} from "./services/influencer.service";


const express = require('express');

// ENV file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


// Post - Load influencers data from csv
app.post('/influencers', async (req: Request, res: Response) => {
    console.log('Post - Load influencers data from csv')
    await setUpInfluencers();
    res.status(200).send('Data load correctly');
    return
})

// GET - Return all the influencers
app.get('/influencers', async (req: Request, res: Response) => {
    console.log('GET - Return all the influencers')
    const influencers = await getInfluncers();
    res.json(influencers)
    return
})

// GET - Return the top 1 for category
app.get('/influencers/top/category/:category', async (req: Request, res: Response) => {
    console.log('GET - Return the top 1 for category')
    console.log(req.params);
    if (!req.params.category) {
        res.status(400).send('Category not found!');
        return;
    }
    const influencers = await getInfluncersByCategory(req.params.category);
    res.json(influencers)
    return
})

// GET - Return the top 1 for country
app.get('/influencers/top/country/:country', async (req: Request, res: Response) => {
    console.log('GET - Return the top 1 for country')
    if (!req.params.country) {
        res.status(400).send('Country not found!');
        return;
    }
    const influencers = await getInfluncersByCounty(req.params.country);
    res.json(influencers)
    return
})

//set the server with the specific port
app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
