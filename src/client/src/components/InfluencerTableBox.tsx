import * as React from "react"
import {VStack, Text, Grid} from '@chakra-ui/react';
import InfluencerTable from "./InfluencerTable";

// @ts-ignore
export default function InfluencerTableBox ({titel, influencers}) {

    return (
        <Grid p={3}>
            <VStack spacing={8}>
                <Text>
                    {titel}
                </Text>

                <InfluencerTable influencers={influencers}/>
            </VStack>
        </Grid>
    )
}
