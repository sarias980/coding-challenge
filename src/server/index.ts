import {Request, Response} from "express";
import {getInfluncers, getInfluncersByCategory, getInfluncersByCounty} from "./services/influencer.service";


const express = require('express');

// ENV file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


// GET - Return all the influencers
app.get('/influencers', (req: Request, res: Response) => {
    console.log('GET - Return all the influencers')
    const influencers = getInfluncers();
    res.json(influencers)
    return
})

// GET - Return the top 1 for category
app.get('/influencers/top/category/:category', (req: Request, res: Response) => {
    console.log('GET - Return the top 1 for category')
    if (!req.body.category) {
        res.status(400).send('Category not found!');
        return;
    }
    const influencers = getInfluncersByCategory(req.body.category);
    res.json(influencers)
    return
})

// GET - Return the top 1 for country
app.get('/influencers/top/country/:country', (req: Request, res: Response) => {
    console.log('GET - Return the top 1 for country')
    if (!req.body.country) {
        res.status(400).send('Country not found!');
        return;
    }
    const influencers = getInfluncersByCounty(req.body.country);
    res.json(influencers)
    return
})

//set the server with the specific port
app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
