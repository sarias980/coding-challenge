import * as React from "react"
import {Table, Tbody, Tr,Td} from '@chakra-ui/react';
import {Influencer} from "../models/influencer.modal";
import {InfluencerTableHeader} from './InfluencerTableHeader';

// @ts-ignore
export default function InfluencerTable ({influencers}) {

    return (
        <Table variant='striped' colorScheme='teal'>
            <InfluencerTableHeader/>
            <Tbody>
                {influencers.map((influencer: Influencer) => (
                    <Tr key={influencer._id}>
                        <Td>{influencer.name}</Td>
                        <Td>{influencer.ig_name}</Td>
                        <Td>{influencer.category_1}</Td>
                        <Td>{influencer.category_2}</Td>
                        <Td isNumeric>{influencer.followers}</Td>
                        <Td>{influencer.audienceCountry}</Td>
                        <Td isNumeric>{influencer.engagementAvg}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}
