import express, {Request, Response} from "express";

// ENV file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


// GET - Return all the influencers
app.get('/influencers', (req: Request, res: Response) => {
    console.log('GET - Return all the influencers')
    return
})

// GET - Return the top 1 for category
app.get('/influencers/top/category/:category', (req: Request, res: Response) => {
    console.log('GET - Return the top 1 for category')
    return
})

// GET - Return the top 1 for country
app.get('/influencers/top/country/:country', (req: Request, res: Response) => {
    console.log('GET - Return the top 1 for country')
    return
})

//set the server with the specific port
app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
