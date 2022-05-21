import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    VStack,
    Grid,
    theme,
} from "@chakra-ui/react"
import {ColorModeSwitcher} from "./ColorModeSwitcher"
import {Influencer} from "./models/influencer.modal";
import {
    getAllInfluencers,
    getAllInfluencersForCategory,
    getAllInfluencersForCountry
} from "./services/InfluencerService";
import {useEffect, useState} from "react";
import InfluencerTableBox from "./components/InfluencerTableBox";

export const App = () => {

    const [influencers, setInfluencers] = useState([]);
    const [influencersCategory, setinfluencersCategory]= useState([]);
    const [influencersCountry, setInfluencersCountry]= useState([]);

    function renderView() {
        getAllInfluencers().then(r => {
                console.log(r);
                setInfluencers(r);
            }
        ).catch(e => {
            console.log(e);
        });
        getAllInfluencersForCategory('Music').then(r => {
                console.log(r);
            setinfluencersCategory(r);
            }
        ).catch(e => {
            console.log(e);
        });
        getAllInfluencersForCountry('Spain').then(r => {
                console.log(r);
            setInfluencersCountry(r);
            }
        ).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        renderView();
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <ColorModeSwitcher justifySelf="flex-end"/>
                {
                    influencers.length > 0 ?
                        <InfluencerTableBox influencers={influencers} titel={'Best influencers'}/> : <></>
                }
                {
                    influencersCategory.length > 0 ?
                        <InfluencerTableBox influencers={influencersCategory}
                                            titel={'Best influencers in Music'}/> : <></>
                }{
                    influencersCountry.length > 0 ?
                        <InfluencerTableBox influencers={influencersCountry} titel={'Best influencers in Spain'}/>: <></>
                }
            </Box>
        </ChakraProvider>
    )
}
